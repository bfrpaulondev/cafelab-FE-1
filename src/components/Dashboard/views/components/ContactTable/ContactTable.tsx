// Importações necessárias
import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Box,
  Center,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import axios from 'axios';
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import ServiceForm from '../../../../../Services/ServiceForm';
import { message } from 'antd';

interface Contact {
  _id: {
    $oid: string;
  };
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  description: string;
}
const ContactTable: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://cafelab-service-new.onrender.com/contact/all');
        setContacts(response.data.data);
      } catch (err) {
        setError('Erro ao carregar contatos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleDeleteContact = async (id: string) => {
    console.log('Excluindo contato com id:', id);
    try {
      const response = await ServiceForm.delete(id);
      setContacts(contacts.filter(contact => contact._id.$oid !== id));
      message.success('Contato excluído com sucesso!');
    } catch (err) {
      message.error('Erro ao excluir contato:', err);
    }
  };

  const handleOpenModal = (contact: Contact) => {
    setSelectedContact(contact);
    onOpen();
  };

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center height="100vh">
        <Box color="red.500">{error}</Box>
      </Center>
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedContacts = contacts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(contacts.length / itemsPerPage);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Primeiro Nome</Th>
              <Th>Ultimo Nome</Th>
              <Th>Email</Th>
              <Th>Telefone</Th>
              <Th>Mensagem</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedContacts.map((contact) => (
              <Tr key={contact._id.$oid}>
                <Td>{contact.first_name}</Td>
                <Td>{contact.last_name}</Td>
                <Td>{contact.email}</Td>
                <Td>{contact.phone}</Td>
                <Td>
                  {contact.description.length > 20 ? (
                    <>{contact.description.slice(0, 20)}...</>
                  ) : (
                    <>{contact.description}</>
                  )}
                </Td>
                <Td>
                  <Button colorScheme="blue" onClick={() => handleOpenModal(contact)} mr={2}>
                    <ViewIcon />
                  </Button>
                  <Button colorScheme="red" onClick={() => handleDeleteContact(contact._id.$oid)}>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="center" mt={4}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            colorScheme={currentPage === index + 1 ? 'gray' : 'gray'}
            mx={1}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>

      {selectedContact && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box p={4} bg="gray.100" borderRadius="md">
                <Box mb={4}>
                  <Box as="strong" mr={2}>First Name:</Box>
                  <Box>{selectedContact.first_name}</Box>
                </Box>
                <Box mb={4}>
                  <Box as="strong" mr={2}>Email:</Box>
                  <Box>{selectedContact.email}</Box>
                </Box>
                <Box>
                  <Box as="strong" mr={2}>Description:</Box>
                  <Box>{selectedContact.description}</Box>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default ContactTable;