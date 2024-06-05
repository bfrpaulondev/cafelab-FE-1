import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import { Flex, List, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubscriptionsOptions from "./SubscriptionsOptions";
import ProductService from "../../Services/ProductService";
import SwiperCoverflowModalProduct from "../SwiperCoverflowModalProduct/SwiperCoverflowModalProduct";
import { useDispatch } from "react-redux";
import { Clean } from "../../redux/Slicers/storeSlice";

export default function SubscriptionInfoSection() {
  const location = useLocation();
  const { title, text, text2, text3, description, img } = location.state || {};
  const [product, setProduct] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  useEffect(() => {
    console.log(location);
    ProductService.getAll()
      .then((res) => {
        setProduct(res.data.filter((item) => item.section === "CAFE"));
      })
      .catch((err) => console.error(err));

    return () => {};
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const data = [
    "Subscreva até o dia 25 do mês, para receber os grãos torrados no último forno à lenha de Portugal. Entregas a partir do dia 02 do mês seguinte;",
    "Subscripções após o dia 25 de cada mês recebem a subscrição no mês subsequente;",
    "Renovação automática – para que o Cafelab sempre esteja presente na sua casa;",
    "Cancelamento gratuito após 3 meses;",
    "Envio grátis.",
  ];
  const [subscriptionType, setSubscriptionType] = useState(
    title === "Depois do cafelab, eu me expresso"
      ? "price_1PLQZGRuE32NAoOjs2PuNNAC"
      : "price_1PLQWYRuE32NAoOjkxsRpIJH"
  );
  const [price, setPrice] = useState(
    title === "Depois do cafelab, eu me expresso"
      ? "€25.00 / mês"
      : "€27.90 / mês"
  );
  const [style, setStyle] = useState("graos");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubscriptionTypeChange = (type, price) => {
    setSubscriptionType(type);
    setPrice(price);
  };

  const showModal = () => {
    if(isLoggedIn === false) {
      navigate("/login", { state: { type: "subscription" } });
    }
    else {
      setIsModalVisible(true);
    }
  };

  const Empty = () => {
    dispatch(Clean());
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (isLoggedIn) {
      Empty();
      navigate("/checkout", {
        state: {
          type: "subscription",
          content: {
            subscription_id: subscriptionType,
            title: title,
            price: price,
            style: style,
            products: selectedProducts,
          },
        },
      });
    } else {
      navigate("/login", { state: { type: "subscription" } });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Box overflowX={"hidden"}
    >
      <Flex
        style={{
          marginTop: "7rem",
          maxWidth: isMobile ? "100vw" : null,
          marginBottom: "5rem",
          width: isMobile ? "100%" : "80%",
          height: "100%",
          overflow: "hidden",
          minWidth: "500px",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "center",
          justifyContent: isMobile ? "center" : "center",
        }}
      >
        <Flex style={{ width: isMobile ? "90vw" : "50vw" }}>
          <img
            src={img}
            width={isMobile ? "100%" : 500}
            height={isMobile ? 300 : 500}
            style={{ objectFit: "contain" }}
          />
        </Flex>
        <Flex vertical style={{ maxWidth: isMobile ? "90vw" : "50vw" ,  marginTop: isMobile ? "3rem" : "0"}}>
          <Flex vertical gap={10}>
            <Text
              fontFamily={"Roboto, sans-serif"}
              fontSize={20}
              fontWeight={900}
            >
              {title}
            </Text>
            <Text fontFamily={"Roboto, sans-serif"} fontSize={16}>
              {text}
            </Text>
            <Text fontFamily={"Roboto, sans-serif"} fontSize={16}>
              {text2}
            </Text>
            <Text fontFamily={"Roboto, sans-serif"} fontSize={16}>
              {description}
            </Text>
            <Text fontFamily={"Roboto, sans-serif"} fontSize={16}>
              {text3}
            </Text>
          </Flex>
          <Flex
            style={{ width: "100%", gap: 20, flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "center",
            justifyContent: isMobile ? "center" : "center", }}
            gap={40}
            
          >
            <Flex flex={isMobile ? 1 : 2} vertical gap={10}>
              <SubscriptionsOptions
                typeSub={title}
                style={style}
                onStyleChange={setStyle}
                subscriptionType={subscriptionType}
                onSubscriptionTypeChange={handleSubscriptionTypeChange}
              />
              <Button
                gap={"1rem"}
                w={"200px"}
                height={50}
                color={"#2D3748"}
                cursor={"pointer"}
                bg={"white"}
                fontFamily={"Roboto, sans-serif"}
                border={"solid"}
                onClick={
                  title === "Depois do cafelab, eu me expresso"
                    ? showModal
                    : handleOk
                }
              >
                <Text fontSize={"1.1rem"}>Subscrever</Text>
              </Button>
            </Flex>
            <Flex flex={isMobile ? 1 : 3}>
              <List
                bordered={false}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Text style={{ color: "black", fontSize: "16px" }}>
                      {item}
                    </Text>
                  </List.Item>
                )}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Subscrever"
        cancelText="Cancelar"
        okButtonProps={{ disabled: selectedProducts.length < 3 }}
      >
        <SwiperCoverflowModalProduct
          currentProducts={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </Modal>
    </Box>
  );
}
