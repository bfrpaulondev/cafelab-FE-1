import React, { useState } from "react";
import { Select, InputNumber, Typography, Row, Col, Space } from "antd";

const { Option } = Select;
const { Text } = Typography;

export default function SubscriptionsOptions({
  typeSub,
  subscriptionType,
  onSubscriptionTypeChange,
  onStyleChange,
  style,
}) {
  const handleSubscriptionChange = (value) => {
    const price = getPrice(value);
    onSubscriptionTypeChange(value, price);
  };

  const handleStyleChange = (value) => {
    onStyleChange(value);
  };

  const getPrice = (subscriptionType) => {
    const prices = {
      price_1PLQZGRuE32NAoOjs2PuNNAC: "€25.00 / mês",
      price_1PLQZURuE32NAoOjHtwUzM3B: "€75.00 a cada 3 meses",
      price_1PLQZgRuE32NAoOjkwXostSF: "€300.00 / ano",
      price_1PLQWYRuE32NAoOjkxsRpIJH: "€27.90 / mês",
      price_1PLQXDRuE32NAoOjIImzIGyo: "€84.70 a cada 3 meses",
      price_1PLQXvRuE32NAoOjgiS5yjYX: "€334.80 / ano",
    };
    return prices[subscriptionType];
  };

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Row style={{ background: "white", padding: "10px", borderRadius: "5px" }}>
        <Col span={24}>
          <Text strong style={{ fontSize: "16px" }}>
            Tamanho -{" "}
            <Select
              defaultValue="3x175g"
              style={{ width: 120, color: "gold" }}
              bordered={false}
            >
              <Option value="3x175g">3 x 175g</Option>
            </Select>
          </Text>
        </Col>
      </Row>
      <Row style={{ background: "white", padding: "10px", borderRadius: "5px" }}>
        <Col span={24}>
          <Text strong style={{ fontSize: "16px" }}>
            Estilo -{" "}
            <Select
              value={style}
              onChange={handleStyleChange} 
              style={{ width: 120, color: "gold" }}
              bordered={false}
            >
              <Option value="graos">Grãos</Option>
              <Option value="moido">Moído</Option>
            </Select>
          </Text>
        </Col>
      </Row>
      <Row style={{ background: "white", padding: "10px", borderRadius: "5px" }}>
        <Col span={24}>
          <Text strong style={{ fontSize: "16px" }}>
            Tipo de subscrição
            {typeSub === "Depois do cafelab, eu me expresso" ? (
              <Select
                value={subscriptionType}
                onChange={handleSubscriptionChange}
                style={{ width: 190, color: "gold" }}
                bordered={false}
              >
                <Option value="price_1PLQZGRuE32NAoOjs2PuNNAC">€25.00 / mês</Option>
                <Option value="price_1PLQZURuE32NAoOjHtwUzM3B">€75.00 a cada 3 meses</Option>
                <Option value="price_1PLQZgRuE32NAoOjkwXostSF">€300.00 / ano</Option>
              </Select>
            ) : (
              <Select
                value={subscriptionType}
                onChange={handleSubscriptionChange}
                style={{ width: 190, color: "gold" }}
                bordered={false}
              >
                <Option value="price_1PLQWYRuE32NAoOjkxsRpIJH">€27.90 / mês</Option>
                <Option value="price_1PLQXDRuE32NAoOjIImzIGyo">€84.70 a cada 3 meses</Option>
                <Option value="price_1PLQXvRuE32NAoOjgiS5yjYX">€334.80 / ano</Option>
              </Select>
            )}
          </Text>
        </Col>
      </Row>
    </Space>
  );
}
