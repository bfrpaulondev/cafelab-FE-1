// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";

const SalesOverview = ({ title, chart }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card
      p="28px 10px 16px 0px"
      mb={{ sm: "26px", lg: "0px" }}
      bg="white"
      borderRadius={10}
      boxShadow="sm"
    >
      <CardHeader mb="20px" pl="22px">
        <Flex direction="column" alignSelf="flex-start">
          <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Box h={{ sm: "300px" }} ps="8px">
        {chart}
      </Box>
    </Card>
  );
};

export default SalesOverview;
