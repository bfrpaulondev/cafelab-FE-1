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
  HStack,
} from "@chakra-ui/react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllUsers, updateUserPassword } from "../Services/LoginService";

export default function ForgotPassword() {
  const [allUsers, setAllUsers] = useState([]);
  const [showNewPasswordField, setShowNewPasswordField] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const [recoveryData, setRecoveryData] = useState({
    email: "",
    nif: "",
    date_birth: "",
  });

  const fetchAllUsers = async () => {
    try {
      const response = await getAllUsers();
      setAllUsers(response.data);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  React.useEffect(() => {
    fetchAllUsers();
  }, []);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecoveryData({ ...recoveryData, [name]: value });
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const user = allUsers.find(
      (u) =>
        recoveryData.email &&
        recoveryData.nif &&
        recoveryData.date_birth &&
        u.email.toLowerCase() === recoveryData.email.toLowerCase() &&
        u.nif.toLowerCase() === recoveryData.nif.toLowerCase() &&
        u.date_birth.toLowerCase() === recoveryData.date_birth.toLowerCase()
    );

    if (user) {
      setShowNewPasswordField(true);
      setId(user._id.$oid);
    } else {
      message.error(
        "Erro ao recuperar a senha. Verifique seus dados e tente novamente."
      );
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      const data = { id, newPassword };
      const response = await updateUserPassword(data.id, data.newPassword);
      message.success("Senha atualizada com sucesso");
      navigate("/login");
    } catch (error) {
      message.error("Erro ao atualizar a senha. Tente novamente.");
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
        Recuperar Senha
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <Input
            className="field"
            type="email"
            name="email"
            value={recoveryData.email}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Email"
          />
        </FormControl>
        <FormControl>
          <Input
            className="field"
            type="text"
            name="nif"
            value={recoveryData.nif}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="NIF"
          />
        </FormControl>
        <FormControl>
          <Input
            className="field"
            type="date"
            name="date_birth"
            value={recoveryData.date_birth}
            onChange={handleChange}
            style={{
              backgroundColor: "var(--bg-100)",
              width: "300px",
              height: "40px",
            }}
            placeholder="Data de Nascimento"
          />
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
          Verificar Informações
        </Button>
        {showNewPasswordField && (
          <>
            <HStack sx={{ position: "relative" }}>
              <FormControl>
                <Input
                  className="field"
                  type={isVisible ? "text" : "password"}
                  name="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  style={{
                    backgroundColor: "var(--bg-100)",
                    width: "300px",
                    height: "40px",
                  }}
                  placeholder="Nova Senha"
                />
              </FormControl>
              <Button
                onClick={handleVisibility}
                sx={{
                  cursor: "pointer",
                  bg: "transparent",
                  border: "none",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                {!isVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-eye-closed"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="RGBA(0, 0, 0, 0.24)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                    <path d="M3 15l2.5 -3.8" />
                    <path d="M21 14.976l-2.492 -3.776" />
                    <path d="M9 17l.5 -4" />
                    <path d="M15 17l-.5 -4" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-eye"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="RGBA(0, 0, 0, 0.24)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                )}
              </Button>
            </HStack>

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
              onClick={handlePasswordUpdate}
            >
              Atualizar Senha
            </Button>
          </>
        )}
        <Link href="/login">
          <Button
            width="full"
            cursor={"pointer"}
            variant="link"
            mt={4}
            bg={"transparent"}
            height={"40px"}
            style={{
              color: "var(--primary-100)",
              border: "none",
              fontSize: "1.1rem",
            }}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Lembrou a senha? Faça login
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
