import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SubscriptionInfoSection from "../components/SubscriptionInfoSection/SubscriptionInfoSection";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../Services/LoginService.tsx";

export default function SubscriptionInfo() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const loginSession = localStorage.getItem("@_auth_sessions");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const sessionData = JSON.parse(atob(loginSession));
      getUserByEmail(sessionData.email)
        .then((response) => {
          if (response.data.is_subscribed) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Erro ao obter conta:", error);
          // Optionally handle user redirection or error display here
        });
    }
  }, [isLoggedIn, loginSession]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      <Header />
      <SubscriptionInfoSection />
      <Footer />
    </Box>
  );
}
