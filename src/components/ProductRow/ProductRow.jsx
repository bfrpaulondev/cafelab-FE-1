import React from "react";
import { Typography, Image, Row, Col, Flex, Divider } from "antd";

const { Text } = Typography;

const ProductRow = ({
  name,
  description,
  origin,
  grain,
  price,
  picture,
  section,
}) => {
  return (
    <Flex
      style={{ padding: "12px", borderBottom: "1px solid #e0e0e0", backgroundColor:"red" }}
      align="center"
      gap={20}
      vertical
    >
      <Flex gap={20} justify="space-between" style={{ width: "100%" }}>
        <Flex vertical justify="center" align="center">
          <Image
            src={picture}
            width={100}
            height={100}
            style={{ borderRadius: "8px" }}
          />

          <Text style={{ fontSize: "lg", fontWeight: "bold" }}>{name}</Text>
        </Flex>
        <Text style={{ fontSize: "md", maxWidth: "550px" }}>{description}</Text>
      </Flex>
      <Divider />
      <Flex
        style={{ width: "100%" }}
        gap={30}
        align="center"
        justify="space-between"
      >
        <Flex style={{ marginTop: "8px" }} vertical>
          <Text strong>Origem:</Text> <Text>{origin}</Text>
        </Flex>
        <Flex vertical>
          <Text strong>Grão:</Text> <Text>{grain}</Text>
        </Flex>
        <Flex vertical>
          <Text strong>Preço:</Text> <Text>{price.toFixed(2)}€</Text>
        </Flex>
        <Flex vertical>
          <Text strong>Seção:</Text> <Text>{section}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductRow;
