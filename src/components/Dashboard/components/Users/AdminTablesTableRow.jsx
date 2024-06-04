import {
  Input,
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
import AdminServiceDashboard from "../../../../Services/components/AdminServiceDashboard/AdminServiceDashboard";
import PropTypes from "prop-types";

const AdminTablesTableRow = (props) => {
  const { id, name, email, refreshData } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inEmail, setEmail] = useState("");
  const toast = useToast();

  const onDelete = async () => {
    try {
      await AdminServiceDashboard.deleteAdmin(id);
      await refreshData();
      toast({
        title: "Administrador Eliminado com Sucesso",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      console.error("Erro ao Eliminar o Administrador. Tente mais tarde", e);
      toast({
        title: "Erro ao Eliminar o Administrador. Tente mais tarde",
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
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold" onClick={onOpen}>
                ELIMINAR
              </Text>
            </Flex>
          </Button>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar Administrador</ModalHeader>
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

AdminTablesTableRow.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  refreshData: PropTypes.func.isRequired,
};

export default AdminTablesTableRow;
