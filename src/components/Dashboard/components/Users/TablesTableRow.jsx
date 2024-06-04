import {
  Input,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  Icon,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  useToast,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { PersonIcon } from "../../components/Icons/Icons";
import { useState } from "react";
import { deleteUser } from "../../../../Services/LoginService";
import PropTypes from "prop-types";

const TablesTableRow = (props) => {
  const { id, name, email, status, date, refreshData } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inEmail, setEmail] = useState("");
  const toast = useToast();

  const onDelete = async () => {
    try {
      await deleteUser(id);
      await refreshData();
      toast({
        title: "Utilizador Eliminado com Sucesso",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      console.error("Erro ao Eliminar o Utilizador. Tente mais tarde", e);
      toast({
        title: "Erro ao Eliminar o Utilizador. Tente mais tarde",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setEmail("");
      onClose();
    }
  };

  return (
    <>
      <Tr>
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <PersonIcon color="inherit" w="40px" h="40px" me="0px" mr={5} />
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {name}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                {email}
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td>
          <Badge
            bg={status === true ? "green.400" : bgStatus}
            color={status === true ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {status === true ? "Subscrito" : "Não Inscrito"}
          </Badge>
        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {formatDate(date)}
          </Text>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar Utilizador</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Para remover a seguinte conta, por favor confirme por escrever o
              respetivo e-mail: {email}
            </Text>
            <Input
              type="email"
              placeholder="Confirmar"
              mt={3}
              value={inEmail}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              isDisabled={email === inEmail ? false : true}
              onClick={onDelete}
            >
              Eliminar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

TablesTableRow.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  refreshData: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  date: PropTypes.any.isRequired,
};

export default TablesTableRow;
