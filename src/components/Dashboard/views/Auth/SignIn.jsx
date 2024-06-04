import React, { useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import theme from "../../theme/theme.jsx";
import AdminServiceDashboard from "../../../../Services/components/AdminServiceDashboard/AdminServiceDashboard";
import { message } from "antd";
import { isMobile } from "react-device-detect";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const titleColor = useColorModeValue("gray.800", "gray.100");
  const textColor = useColorModeValue("gray.400", "white");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const admin = { email, password };
      const response = await AdminServiceDashboard.loginAdmin(admin.email, admin.password);

      if (rememberMe) {
        localStorage.setItem('admin', JSON.stringify(response.data));
      } else {
        sessionStorage.setItem('admin', JSON.stringify(response.data));
      }
      message.success('Login realizado com sucesso!');
      navigate("/admin-dashboard");
    } catch (err) {
      message.error('Erro ao fazer login:');
      setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Flex position="relative" mb="40px">
        <Flex
          h={{ sm: "initial", md: "75vh", lg: "85vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          mb="30px"
          pt={{ sm: "100px", md: "0px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            w={{ base: "100%", md: "50%", lg: "42%" }}
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              p={isMobile ? "0px" : "60px"}
              mt={{ md: "150px", lg: "80px" }}
            >
              <Heading color={titleColor} textAlign={isMobile ? "center" : "left"} fontSize="32px" mb="10px">
                Bem-vindo de Volta
              </Heading>
              <Text
                mb="36px"
                ms="4px"
                textAlign={isMobile ? "center" : "left"}
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                Insira seu E-mail e Palavra-Passe para Entrar
              </Text>
              <FormControl onSubmit={handleSubmit} as="form" >
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  E-mail
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  w={isMobile ? "100%" : "300px"}
                  placeholder="Seu endereço de e-mail"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Palavra-Passe
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  w={isMobile ? "100%" : "300px"}
                  fontSize="sm"
                  type="password"
                  placeholder="Sua palavra-passe"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl display="flex" alignItems="center">
                  <Switch
                    id="remember-login"
                    colorScheme="gray"
                    me="10px"
                    isChecked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    ms="1"
                    fontWeight="normal"
                  >
                    Lembrar-me
                  </FormLabel>
                </FormControl>
                {error && <Text color="red.500" mb="24px">{error}</Text>}
                <Button
                  fontSize="1.1rem"
                  type="submit"
                  bg="gray.400"
                  w="300px"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: "gray.200",
                    color: "gray.700",
                  }}
                  _active={{
                    bg: "gray.300",
                  }}
                >
                  Entrar
                </Button>
              </FormControl>
            </Flex>
          </Flex>
          <Box
            display={{ base: "none", md: "block" }}
            overflowX="hidden"
            h="100%"
            w="40vw"
            position="absolute"
            right="0px"
          >
            <Box
              bgImage={"https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              borderBottomLeftRadius="20px"
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default SignIn;
