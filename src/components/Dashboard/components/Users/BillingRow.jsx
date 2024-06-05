import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPencilAlt, FaTrashAlt, FaSave } from "react-icons/fa";
import OrderService from "../../../../Services/OrderService";

function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const {
    user_id,
    address,
    zip_code,
    product_id,
    status,
    amount,
    currency,
    _id,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    user_id,
    address,
    zip_code,
    status,
    amount,
  });

  const deleteOrder = async (id) => {
    try {
      const data = await OrderService.deleteOrder(id);
      console.log(data);
      window.location.reload();
    } catch (error) {
      setError("Error fetching all orders");
      console.error("Error fetching all orders:", error);
    }
  };

  const saveChanges = async () => {
    try {
      const updatedOrder = {
        ...formData,
        id_payment: _id,
        product_id: product_id,
      };
      console.log(updatedOrder);
      const data = await OrderService.updateOrder(updatedOrder);
      console.log(data);
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating the order:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        {isEditing ? (
          <Flex direction="column" maxWidth="70%">
            <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
              ID de utilizador: {user_id}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Morada:{" "}
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                color="gray.500"
                size="sm"
              />
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Código-postal:{" "}
              <Input
                name="address"
                value={formData.zip_code}
                onChange={handleChange}
                color="gray.500"
                size="sm"
              />
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Estado do pedido:{" "}
              <Input
                name="status"
                value={formData.status}
                onChange={handleChange}
                color="gray.500"
                size="sm"
              />
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Preço:{" "}
              <Input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                color="gray.500"
                size="sm"
              />
            </Text>
          </Flex>
        ) : (
          <Flex direction="column" maxWidth="70%">
            <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
              ID de utilizador: {user_id}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Morada:{" "}
              <Text as="span" color="gray.500">
                {address}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Código-Postal:{" "}
              <Text as="span" color="gray.500">
                {zip_code}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Produtos:{" "}
              <Text as="span" color="gray.500">
                {product_id?.join(", ")}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Estado do pedido:{" "}
              <Text as="span" color="gray.500">
                {status}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Preço:{" "}
              <Text as="span" color="gray.500">
                {amount}€
              </Text>
            </Text>
          </Flex>
        )}
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
            onClick={() => deleteOrder(_id)}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                ELIMINAR
              </Text>
            </Flex>
          </Button>
          {isEditing ? (
            <>
              <Button p="0px" bg="transparent" onClick={saveChanges}>
                <Flex
                  color={textColor}
                  cursor="pointer"
                  align="center"
                  p="12px"
                >
                  <Icon as={FaSave} me="4px" />
                  <Text fontSize="sm" fontWeight="semibold">
                    SALVAR
                  </Text>
                </Flex>
              </Button>
              <Button
                p="0px"
                bg="transparent"
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                <Flex
                  color={textColor}
                  cursor="pointer"
                  align="center"
                  p="12px"
                >
                  <Text fontSize="sm" fontWeight="semibold">
                    CANCELAR
                  </Text>
                </Flex>
              </Button>
            </>
          ) : status === "Subscrição" ? (
            <></>
          ) : (
            <Button p="0px" bg="transparent" onClick={() => setIsEditing(true)}>
              <Flex color={textColor} cursor="pointer" align="center" p="12px">
                <Icon as={FaPencilAlt} me="4px" />
                <Text fontSize="sm" fontWeight="semibold">
                  EDITAR
                </Text>
              </Flex>
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
