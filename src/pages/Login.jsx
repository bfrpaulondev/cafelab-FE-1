// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Heading,
  VStack,
  Image,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { loginUser } from "../Services/LoginService";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    
  });

  const navigate = useNavigate();
  const toast = useToast();
  const { type } = location.state || {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(loginData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const account = await loginUser(loginData.email, loginData.password);
      localStorage.setItem(
        "@_auth_sessions",
        btoa(
          JSON.stringify({
            email: loginData.email,
            code_access: account.code_access,
          })
        )
      );

      toast({
        title: "Login bem-sucedido",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      if (type === "subscription") {
        navigate("/subscricao");
      } else {
        navigate("/perfil");
      }
    } catch (error) {
      toast({
        title: "Erro de login",
        description: "Email ou senha inválidos. Verifique e tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={6}
      rounded="md"
      display="flex"
      w="100vw"
      flexDirection="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      boxShadow="lg"
      bg="var(--bg-200)"
    >
      <Image src="https://i.ibb.co/2s9Fdb9/logo.png" alt="logo" w="100px" />
      <Heading as="h1" mb={6} textAlign="center" color="var(--primary-100)">
        Login
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            bg="var(--bg-100)"
            w="300px"
            h="40px"
            placeholder="Email"
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            bg="var(--bg-100)"
            w="300px"
            h="40px"
            placeholder="Password"
          />
        </FormControl>
        <Button
          width="300px"
          mt={4}
          h="40px"
          color="var(--bg-100)"
          bg="var(--primary-100)"
          borderRadius="5px"
          fontSize="1.1rem"
          _hover={{
            bg: "#F5F5F5",
            border: "1px solid var(--primary-100)",
            cursor: "pointer",
            color: "var(--primary-100)",
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Link href="/esqueci-senha">
          <Text
            mt={2}
            fontSize="1.1rem"
            color="var(--primary-100)"
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            Esqueceu sua palavra-passe?
          </Text>
        </Link>
        <Link href="/registrar">
          <Button
            width="full"
            variant="link"
            mt={4}
            fontSize="1.1rem"
            color="var(--primary-100)"
            _hover={{ textDecoration: "underline" }}
          >
            Não tem uma conta? Registrar aqui!
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
