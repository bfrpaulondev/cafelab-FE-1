import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Button,
  Text,
  HStack,
  Avatar,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfileComponent from "../components/ProfileComponent/ProfileComponent";
import SubscriptionComponent from "../components/SubscriptionComponent/SubscriptionComponent";
import PurchasesComponent from "../components/PurchasesComponent/PurchasesComponent";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [isMobile] = useMediaQuery("(max-width: 992px)"); // Utilizando useMediaQuery
  const navigate = useNavigate()

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <ProfileComponent />;
      case "subscription":
        return <SubscriptionComponent />;
      case "purchases":
        return <PurchasesComponent />;
      default:
        return <ProfileComponent />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Header />
      <Box
        sx={{
          marginTop: "100px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100vw",
          gap: "1rem",
        }}
      >
        {isMobile ? (
          <VStack
            gap="1rem"
            width="100%"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <HStack
              bg={"#E2E8F0"}
              padding={"1rem"}
              gap={"1rem"}
              width={"90vw"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10px"}
            >
              <Button
                onClick={() => setActiveComponent("profile")}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <UserOutlined />
              </Button>
              <Button
                onClick={() => setActiveComponent("subscription")}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ShoppingOutlined />
              </Button>
              <Button
                onClick={() => setActiveComponent("purchases")}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <DollarCircleOutlined />
              </Button>
            </HStack>
            <VStack
              bg={"#E2E8F0"}
              padding={"1rem"}
              gap={"1rem"}
              width={"90vw"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10px"}
            >
              {renderComponent()}
            </VStack>
          </VStack>
        ) : (
          <HStack
            gap="1rem"
            width="100%"
            height={"75vh"}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <VStack
              bg={"#E2E8F0"}
              gap={"1rem"}
              minH={"100%"}
              width={"20vw"}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              borderRadius={"10px"}
            >
              <Avatar />
              {/* Use os dados do usuário, como o profile_image */}
              <Button
                onClick={() => setActiveComponent("profile")}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Atualizar Perfil
              </Button>
              <Button
                onClick={() => setActiveComponent("subscription")}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Gerenciar Subscrição
              </Button>
              <Button
                onClick={() => setActiveComponent("purchases")}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Compras
              </Button>
              <Button
                onClick={() => {
                  localStorage.removeItem("@_auth_sessions");
                  localStorage.removeItem("isLoggedIn");
                  navigate("/")
                }}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#2D3748",
                  border: "1px solid #2D3748",
                }}
                sx={{
                  width: "100%",
                  height: "40px",
                  bg: "#2D3748",
                  color: "#E2E8F0",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sair da conta
              </Button>
            </VStack>
            <VStack
              bg={"#E2E8F0"}
              padding={"1rem"}
              gap={"1rem"}
              minH={"100%"}
              width={"70vw"}
              display={"flex"}
              flexDirection={"column"}
              justify={"flex-start"}
              alignItems={"flex-start"}
              borderRadius={"10px"}
              overflowY={"auto"}
            >
              {renderComponent()}
            </VStack>
          </HStack>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
