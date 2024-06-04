import React, { useState } from "react";
import { Button, Card, Flex, Popconfirm, Typography, Pagination } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Text } = Typography;

const ProductsComponent = ({ title, data, onEdit, onDelete }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div style={{ padding: "12px" }}>
        <Text style={{ fontSize: "lg", fontWeight: "bold" }}>{title}</Text>
      </div>
      <Flex wrap gap={20}>
        {currentData.map((product, index) => {
          const isExpanded = expandedDescriptions[index];
          const description = isExpanded
            ? product.description
            : product.description.length > 100
            ? product.description.substring(0, 50) + "..."
            : product.description;

          return (
            <Card
              key={index}
              style={{ width: 300, marginBottom: "24px", position: "relative" }}
              cover={
                <img
                  alt={product.name}
                  src={product.picture}
                  style={{ height: "300px", objectFit: "cover" }}
                />
              }
            >
              <Flex
                style={{ position: "absolute", top: 10, right: 10 }}
                gap={10}
              >
                <Button onClick={() => onEdit(product)}>Editar</Button>
                <Popconfirm
                  title="Apagar o produto"
                  description="Tem acerteza que quer apagar o produto?"
                  onConfirm={() => onDelete(product)}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button danger>Apagar</Button>
                </Popconfirm>
              </Flex>

              <Meta title={product.name} />
              <div style={{ marginTop: "10px" }}>
                <Text>{description}</Text>
                {product.description.length > 100 && (
                  <Button type="link" onClick={() => toggleDescription(index)}>
                    {isExpanded ? "Mostrar menos" : "Mostrar mais"}
                  </Button>
                )}
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <Meta title="Preço" description={product.price + "€"} />
                <Meta title="Origem" description={product.origin} />
                {product.grain && (
                  <Meta title="Grão" description={product.grain} />
                )}
                <Meta title="Secção" description={product.section} />
              </div>
            </Card>
          );
        })}
      </Flex>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default ProductsComponent;
