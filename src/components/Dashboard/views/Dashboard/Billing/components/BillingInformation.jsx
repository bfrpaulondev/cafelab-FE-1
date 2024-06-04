// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";
import BillingRow from "../../../../components/Users/BillingRow.jsx";

const BillingInformation = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card my={{ lg: "24px" }} me={{ lg: "24px" }} bg="white" borderRadius={15}>
      <Flex direction="column">
        <CardHeader py="12px">
          <Text color={textColor} fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Flex direction="column" w="100%">
            {data.map((row, index) => {
              return (
                <BillingRow
                  key={index}
                  _id={row._id.$oid}
                  user_id={row.user_id}
                  address={row.address}
                  product_id={row.product_id}
                  status={row.status}
                  amount={row.amount}
                  zip_code={row.zip_code}
                  currency={row.currency}
                />
              )
            })}
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default BillingInformation;
