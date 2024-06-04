// Chakra imports
import { Flex } from "@chakra-ui/react";
// Assets
import { billingData } from "../../../variables/general";
import BillingInformation from "./components/BillingInformation";
import OrderService from "../../../../../Services/OrderService";
import { useEffect, useState } from "react";

function Billing() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const data = await OrderService.getAll();
        console.log(data)
        setOrders(data.data);
      } catch (error) {
        setError("Error fetching all orders");
        console.error("Error fetching all orders:", error);
      }
    };

    fetchAllOrders();
  }, []);
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <BillingInformation title={"Compras Pendentes"} data={orders} />
    </Flex>
  );
}

export default Billing;
