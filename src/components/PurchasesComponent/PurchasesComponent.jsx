import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Text,
  useColorModeValue,
  Icon,
  VStack,
  useDisclosure,
  Collapse,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowDownIcon,
  InfoOutlineIcon,
  CalendarIcon,
  PlusSquareIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import OrderService from "../../Services/OrderService";
import { getUserByEmail } from "../../Services/LoginService.tsx";
import { MinusCircleOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Flex } from "antd";

const PurchasesComponent = () => {
  const [orders, setOrders] = useState([]);
  const { isOpen, onToggle } = useDisclosure();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const loginSession = localStorage.getItem("@_auth_sessions");
  const [isLoading, setIsLoading] = useState(false);
  const [openIndexes, setOpenIndexes] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      if (!isLoggedIn) return;

      setIsLoading(true);
      try {
        const sessionData = JSON.parse(atob(loginSession));
        const responseUser = await getUserByEmail(sessionData.email);
        const userData = responseUser.data;

        const responseOrder = await OrderService.getAll();
        const newOrders = responseOrder.data.filter((item) => {
          if (userData.is_subscribed) {
            return (
              item.user_id === userData.name ||
              item.user_id === userData._id.$oid
            );
          } else {
            return item.user_id === userData._id.$oid;
          }
        });

        setOrders(newOrders);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [isLoggedIn, loginSession]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // January is 0!
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const toggleItem = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  function capitalizeFirstLetter(string) {
    if (!string) return string; // Return the original string if it's empty
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const borderColor = useColorModeValue("gray.200", "gray.600");

  if (isLoading) {
    return <Box>Carregando...</Box>
  }

  return (
    <VStack spacing={4} align="stretch" width={"100%"}>
      {orders.map((purchase, index) => (
        <Box
          key={index}
          p={5}
          shadow="xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={4} alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              <InfoOutlineIcon mr={2} />
              Quantidade de produtos:
            </Text>
            <Text>
              {purchase.product_id.length +
                "(" +
                capitalizeFirstLetter(purchase.status) +
                ")"}
            </Text>

            <Text fontSize="lg" fontWeight="bold">
              <CalendarIcon mr={2} />
              Data:
            </Text>
            <Text>{formatDate(purchase.created_at.$date)}</Text>

            <Button
              onClick={() => toggleItem(index)}
              size="sm"
              variant="ghost"
              p="0px"
              bg="transparent"
              mb={{ sm: "10px", md: "0px" }}
              me={{ md: "12px" }}
              border={"none"}
              cursor={"pointer"}
            >
              <Flex align="center" justify="center" gap={5}>
                <Flex>
                  {openIndexes[index] ? (
                    <MinusCircleOutlined />
                  ) : (
                    <PlusCircleFilled />
                  )}
                </Flex>
                <Flex>Detalhes</Flex>
              </Flex>
            </Button>
          </Grid>
          <Collapse in={openIndexes[index]}>
            <Box mt={4}>
              <Text fontWeight="bold">Morada:</Text>
              <Text ml={4}>{purchase.address}</Text>
              <Text ml={4}>{purchase.zip_code}</Text>

              <Text fontWeight="bold">Produtos:</Text>
              {purchase.product_id.map((item, idx) => (
                <Text key={idx} ml={4}>
                  - {item}
                </Text>
              ))}

              <Text fontWeight="bold">Total:</Text>
              <Text ml={4}>{`${purchase.amount.toFixed(2)}€`}</Text>
            </Box>
          </Collapse>
          <Divider orientation="horizontal" mt={4} />
        </Box>
      ))}
    </VStack>
  );
};

export default PurchasesComponent;
