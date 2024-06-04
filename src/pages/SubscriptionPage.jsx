import React, { useEffect, useState } from "react";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SubscriptionSection from "../components/SubscriptionSection/SubscriptionSection";
import ModalQuiz from "../components/ModalQuiz";
import { getUserByEmail } from "../Services/LoginService.tsx";
export default function SubscriptionPage() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const loginSession = localStorage.getItem("@_auth_sessions");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      const sessionData = JSON.parse(atob(loginSession));
      getUserByEmail(sessionData.email)
        .then((response) => {
          setUserData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao obter conta:", error);
          setIsLoading(false);
        });
    }
  }, [isLoggedIn, loginSession]);
  return (
    <ChakraProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Header />
        <ModalQuiz />
        <SubscriptionSection userData={userData} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
