// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
// Custom icons
import {
  CartIcon,
  StatsIcon,
  WalletIcon,
} from "../../../../components/Icons/Icons.jsx";
import ChartStatistics from "./ChartStatistics";

const ActiveUsers = ({ title, percentage, chart, usersInfo, orders }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const sells = orders.reduce((acc, item) => acc + item.amount, 0);
  return (
    <Card p={10} bg="white" borderRadius={20} boxShadow="sm">
      <CardBody>
        <Flex direction="column" w="100%">
          {chart}
          <Flex direction="column" mt="24px" mb="36px" alignSelf="flex-start">
            <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
              {title}
            </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }} columns={3}>
            <ChartStatistics
              title={"Utilizadores"}
              amount={usersInfo.length}
              percentage={20}
              icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Vendas"}
              amount={`${sells.toFixed(2)}€`}
              percentage={30}
              icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Produtos Vendidos"}
              amount={orders.length}
              percentage={40}
              icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
