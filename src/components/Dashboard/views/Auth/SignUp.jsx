import React, { useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import BgSignUp from "/img/BgSignUp.png";
import theme from "../../theme/theme";
import AdminServiceDashboard from "../../../../Services/components/AdminServiceDashboard/AdminServiceDashboard";
import { message } from "antd";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const titleColor = useColorModeValue("gray.300", "gray.100");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!nameRegex.test(name)) {
      setError(
        "Nome inválido. Deve conter pelo menos uma letra maiúscula e uma letra minúscula."
      );
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Senha inválida. Deve conter pelo menos 6 caracteres, uma letra maiúscula, uma letra minúscula e um número."
      );
      return;
    }

    if (!emailRegex.test(email)) {
      setError("E-mail inválido");
      return;
    }

    try {
      const admin = { name, email, password };
      const response = await AdminServiceDashboard.createAdmin(admin);

      if (rememberMe) {
        localStorage.setItem("admin", JSON.stringify(response));
      } else {
        sessionStorage.setItem("admin", JSON.stringify(response));
      }
      message.success("Conta criada com sucesso!");
      navigate("/admin-dashboard");
    } catch (err) {
      message.error("Erro ao criar conta:");
      setError("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minH={{ base: "70vh", md: "50vh" }}
          maxW={{ md: "calc(100vw - 50px)" }}
          w={"100%"}
          borderRadius={{ md: "15px" }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgImage={BgSignUp}
          bgSize="cover"
          mx={{ md: "auto" }}
          mt={{ md: "14px" }}
        ></Box>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="6.5rem"
          mb="30px"
        >
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Bem-vindo
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
          <Flex
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <FormControl onSubmit={handleSubmit} as="form">
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Nome
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                w={"300px"}
                borderRadius="15px"
                type="text"
                placeholder="Seu Primeiro e Sobrenome"
                mb="24px"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                E-mail
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Seu endereço de e-mail"
                mb="24px"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Palavra-Passe
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Sua palavra-passe"
                mb="24px"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControl display="flex" alignItems="center" mb="24px">
                <Switch
                  id="remember-login"
                  colorScheme="gray"
                  me="10px"
                  isChecked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                  Lembrar-me
                </FormLabel>
              </FormControl>
              {error && (
                <Text color="red.500" mb="24px">
                  {error}
                </Text>
              )}
              <Button
                type="submit"
                bg="gray.300"
                fontSize="10px"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                  bg: "gray.100",
                }}
                _active={{
                  bg: "gray.400",
                }}
              >
                Criar Conta
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Já tem uma conta?
                <Link to="/admin-auth">
                  <Text
                    color={titleColor}
                    as="span"
                    ms="5px"
                    href="#"
                    fontWeight="bold"
                  >
                    Entre
                  </Text>
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default SignUp;
