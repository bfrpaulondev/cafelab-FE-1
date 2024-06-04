import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Heading,
  VStack,
  Image,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createUser } from "../Services/LoginService";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload/ImageUpload";

export default function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    name: "",
    profile_image: "",
    email: "",
    password: "",
    address: "",
    zip_code:"",
    nif: "",
    date_birth: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Limpar mensagem de erro ao alterar o valor do campo
  };

  const validateEmail = (email) => {
    // Regex para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Validar se a senha tem pelo menos 6 caracteres
    return password.length >= 6;
  };

  const handleValidation = () => {
    const newErrors = {};

    // Validar o campo de nome
    if (!registerData.name) {
      newErrors.name = "Por favor, insira seu nome.";
    }

    // Validar o campo de e-mail
    if (!validateEmail(registerData.email)) {
      newErrors.email = "Por favor, insira um endereço de e-mail válido.";
    }

    // Validar o campo de senha
    if (!validatePassword(registerData.password)) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    // Adicione validadores para os outros campos conforme necessário

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleUploadChange = (info) => {
    if (info.file.status === "done") {
      const profileImageUrl = info.file.response.url; // Ajustar conforme a resposta do backend
      setRegisterData({ ...registerData, profile_image: profileImageUrl });
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleSubmit = async () => {
    try {
      if (handleValidation()) {
        try {
          await createUser(registerData);
          message.success("Conta criada com sucesso");
          navigate("/login");
        } catch (error) {
          console.error("Erro ao criar conta:", error);
          message.error("Erro ao criar conta");
        }
      }
    } catch (error) {
      console.error("Erro ao validar formulário:", error);
      message.error("Erro ao criar conta");
    }
  };

  return (
    <Box
      p={6}
      rounded="md"
      display={"flex"}
      maxW={"100vw"}
      w={"100%"}
      flexDirection={"column"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow="lg"
      style={{ backgroundColor: "var(--bg-200)" }}
    >
      <Image src="/src/assets/logo.png" alt="logo" w={"100px"} />
      <Heading
        as="h1"
        mb={6}
        textAlign="center"
        style={{ color: "var(--primary-100)" }}
      >
        Registrar conta
      </Heading>
      <VStack>
        <FormControl isInvalid={errors.name}>
          <Input
            className="field"
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Nome"
          />
          <FormErrorMessage color={"red"}>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.profile_image}>
          <ImageUpload />
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <Input
            className="field"
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Email"
          />
          <FormErrorMessage color={"red"}>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <Input
            className="field"
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Password"
          />
          <FormErrorMessage color={"red"}>{errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.address}>
          <Input
            className="field"
            type="text"
            name="address"
            value={registerData.address}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Morada"
          />
          <FormErrorMessage color={"red"}>{errors.address}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.zip_code}>
          <Input
            className="field"
            type="text"
            name="zip_code"
            value={registerData.zip_code}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Código Postal"
          />
          <FormErrorMessage color={"red"}>{errors.zip_code}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.nif}>
          <Input
            className="field"
            type="text"
            name="nif"
            value={registerData.nif}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="NIF"
          />
          <FormErrorMessage color={"red"}>{errors.nif}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.date_birth}>
          <Input
            className="field"
            type="date"
            name="date_birth"
            value={registerData.date_birth}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Data de Nascimento"
          />
          <FormErrorMessage color={"red"}>{errors.date_birth}</FormErrorMessage>
        </FormControl>
        <Button
          variant="solid"
          width="300px"
          mt={4}
          height={"40px"}
          color={"var(--bg-100)"}
          bg={"var(--primary-100)"}
          border={"none"}
          borderRadius={"5px"}
          fontSize={"1.1rem"}
          _hover={{
            backgroundColor: "#F5F5F5",
            border: "1px solid var(--primary-100)",
            cursor: "pointer",
            color: "var(--primary-100)",
          }}
          onClick={handleSubmit}
        >
          Registrar
        </Button>
        <Link href="/login">
          <Button
            width="full"
            cursor={"pointer"}
            variant="link"
            mt={4}
            height={"40px"}
            bg={"transparent"}
            style={{
              color: "var(--primary-100)",
              border: "none",
              fontSize: "1.1rem",
            }}
            _hover={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--primary-100)",
              textDecoration: "underline",
            }}
          >
            Ja está registado? Fazer Login aqui!
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
