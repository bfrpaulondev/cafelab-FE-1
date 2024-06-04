import React, { useEffect, useState, useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Spinner,
  Center,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import styled from "styled-components";
import EventService from "../../../../../Services/components/EventService/EventService";

// Styled-components for custom styling
const StyledButton = styled(Button)`
  background-color: #4a5568;
  border-color: #2d3748;
  color: white;
  min-width: 300px;
  min-height: 45px;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #2d3748;
    border-color: #896c20;
    color: #2d3748;
  }
`;

// Define a interface para os dados retornados pelo serviço
interface RawEvent {
  _id: { $oid: string };
  title: string;
  date: string | { $date: number };
  description: string;
  picture: string;
}

// Define a interface para os dados esperados pelo componente
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  picture: string;
}

// Função para converter os dados brutos para o formato esperado
const convertRawEvent = (rawEvent: RawEvent): Event => {
  const id = rawEvent._id.$oid;
  const date =
    typeof rawEvent.date === "string"
      ? rawEvent.date
      : new Date(rawEvent.date.$date).toISOString().slice(0, 10);
  return {
    id,
    title: rawEvent.title,
    date,
    description: rawEvent.description,
    picture: rawEvent.picture,
  };
};

const EventsTable: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({});
  const [editEvent, setEditEvent] = useState<Partial<Event> | null>(null);
  const toast = useToast();

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await EventService.getAllEvents();
      const rawData: RawEvent[] = response.data;
      const formattedEvents = rawData.map(convertRawEvent);
      setEvents(formattedEvents);
    } catch (error) {
      setError("Failed to fetch events");
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async () => {
    if (
      !newEvent.title ||
      !newEvent.date ||
      !newEvent.description ||
      !newEvent.picture
    ) {
      toast({
        title: "Todos os campos são obrigatórios.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const createdEvent: Partial<Event> = await EventService.createEvent(
        newEvent
      );
      setEvents([...events, { id: createdEvent.id, ...newEvent } as Event]);
      setNewEvent({});
      toast({
        title: "Evento criado.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erro ao criar evento.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error creating event:", error);
    }
  };

  const handleEditEvent = (event: Event) => {
    setEditEvent({ ...event });
  };

  const handleUpdateEvent = async () => {
    if (
      !editEvent?.title ||
      !editEvent?.date ||
      !editEvent?.description ||
      !editEvent?.picture
    ) {
      toast({
        title: "Todos os campos são obrigatórios.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      console.log(editEvent)
      await EventService.updateEvent(editEvent);
      const updatedEvents = events.map((event) =>
        event.id === editEvent.id ? { ...event, ...editEvent } : event
      );
      setEvents(updatedEvents);
      fetchEvents();
      setEditEvent(null);
      setNewEvent({})
      toast({
        title: "Evento atualizado.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar evento.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error updating event:", error, editEvent);
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await EventService.deleteEvent(eventId);
      setEvents(events.filter((event) => event.id !== eventId));
      toast({
        title: "Evento excluído.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `Erro ao excluir evento com ID ${eventId}.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error(`Error deleting event with ID ${eventId}:`, error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const uploadProps = useMemo(
    () => ({
      name: "file",
      action: "https://cafelab-service-new.onrender.com/upload",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        const { status, response, name } = info.file;
        if (status === "uploading") {
          return;
        }
        if (status === "done") {
          const url = response.url;
          if (url) {
            setNewEvent((prev) => ({ ...prev, picture: url }));
            if (editEvent) {
              setEditEvent((prev) => ({ ...prev, picture: url }));
            }
            message.success(<a href={url}>{name}</a>);
          } else {
            message.error(`Upload completed but no URL received.`);
          }
        } else if (status === "error") {
          message.error(`${name} file upload failed.`);
        }
      },
    }),
    [editEvent]
  );

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Box color="red.500">{error}</Box>
      </Center>
    );
  }

  return (
    <Box mb={4}>
      <FormControl>
        <FormLabel>Nome do Evento</FormLabel>
        <Input
          value={newEvent.title || ""}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          placeholder="Nome do Evento"
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Data do Evento</FormLabel>
        <Input
          type="date"
          value={newEvent.date || ""}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          placeholder="Data do Evento"
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Descrição</FormLabel>
        <Input
          value={newEvent.description || ""}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
          placeholder="Descrição do Evento"
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Imagem</FormLabel>
        <Upload {...uploadProps}>
          <StyledButton icon={<UploadOutlined />}>
            Escolha sua melhor foto!
          </StyledButton>
        </Upload>
        {newEvent.picture && (
          <img src={newEvent.picture} alt="Event" width="100" />
        )}
      </FormControl>
      <Button
        mt={4}
        mb={4}
        colorScheme="gray"
        onClick={handleCreateEvent}
        isDisabled={
          !newEvent.title ||
          !newEvent.date ||
          !newEvent.description ||
          !newEvent.picture
        }
      >
        Criar Novo Evento
      </Button>

      <hr />
      <Box mt={4}>
        {editEvent && (
          <Box mb={4}>
            <FormControl>
              <FormLabel>Nome do Evento</FormLabel>
              <Input
                value={editEvent.title}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, title: e.target.value })
                }
                placeholder="Event Title"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Data do Evento</FormLabel>
              <Input
                type="date"
                value={editEvent.date}
                onChange={(e) =>
                  setEditEvent({
                    ...editEvent,
                    date: e.target.value,
                  })
                }
                placeholder="Event Date"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Descrição</FormLabel>
              <Input
                value={editEvent.description}
                onChange={(e) =>
                  setEditEvent({ ...editEvent, description: e.target.value })
                }
                placeholder="Event Description"
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Imagem</FormLabel>
              <Upload {...uploadProps}>
                <StyledButton icon={<UploadOutlined />}>
                  Escolha sua melhor foto!
                </StyledButton>
              </Upload>
              {editEvent.picture && (
                <img src={editEvent.picture} alt="Event" width="100" />
              )}
            </FormControl>
            <Button
              mt={4}
              colorScheme="gray"
              onClick={handleUpdateEvent}
              isDisabled={
                !editEvent.title ||
                !editEvent.date ||
                !editEvent.description ||
                !editEvent.picture
              }
            >
              Atualizar Evento
            </Button>
            <Button
              mt={4}
              ml={2}
              colorScheme="gray"
              onClick={() => setEditEvent(null)}
            >
              Cancelar Atualização
            </Button>
          </Box>
        )}
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th>Picture</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <Tr key={event.id}>
                <Td>{event.id}</Td>
                <Td>{event.title}</Td>
                <Td>{event.date}</Td>
                <Td>{event.description}</Td>
                <Td>
                  <img src={event.picture} alt={event.title} width="100" />
                </Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEditEvent(event)}
                  >
                    Editar
                  </Button>
                  <Button
                    colorScheme="red"
                    ml={2}
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    Deletar
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={6}>Nenhum Evento Encontrado</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default EventsTable;
