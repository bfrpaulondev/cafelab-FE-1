import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box
      bg="gray.100"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      zIndex={2}
      WebkitBackdropFilter="blur(5px)"
      backdropFilter="blur(5px)"
      border="1px solid rgba(229, 220, 210, 0.6)"
      display="flex"
      flexDirection="column"
      gap={"1rem"}
      justifyContent="center"
      position={"absolute"}
      alignItems="center"
      maxW={"100vw"}
      w={"100%"}
      height="100vh"
    >
      <Text
        as={"p"}
        fontSize={"1.1rem"}
        color={"#718096"}
        fontFamily={"Roboto, sans-serif"}
      >
        404 ERROR PAGE
      </Text>
      <Text
        as={"h1"}
        fontSize={"3rem"}
        color={"#718096"}
        fontFamily={"Roboto, sans-serif"}
      >
        Page not Found
      </Text>
      <Text
        as={"p"}
        fontSize={"1.1rem"}
        color={"#718096"}
        fontFamily={"Roboto, sans-serif"}
      >
        A página que você procura pode ter sido removida, ter seu nome alterado
        ou estar temporariamente indisponível
      </Text>
      <Button
        onClick={() => (window.location.href = "/")}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#2D3748",
          color: "#E2E8F0",
          fontFamily: "Roboto, sans-serif",
          fontSize: "0.9rem",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          width: "300px",
          height: "40px",
        }}
      >
        Voltar ao Inicio
      </Button>
    </Box>
  );
}
