import {
  Box,
  Button,
  Input,
  InputGroup,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import NewsLetterService from "../../Services/NewsLetterService";
import { message } from "antd";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
export default function Footer() {
  const [formData, setFormData] = useState({ email: "" });

  function handleSubmit() {
    try {
      const isValidEmail = validateEmail(formData.email);
      if (isValidEmail) {
        NewsLetterService.post(formData);
        setFormData({ email: "" });
        message.success("Você receberá um email em breve!");
      } else {
        message.error("O email inserido não é válido.");
      }
    } catch (error) {
      message.error("Erro ao enviar o email:", error);
    }
  }

  function validateEmail(email: string): boolean {
    // Regular expression to validate email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <Box id="footer">
      <VStack
        id="footer__column__one"
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <Logo src="https://i.ibb.co/2s9Fdb9/logo.png" alt="logo" />
        <Text
          as={"p"}
          fontSize={"0.9rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
        >
          Av. Moçambique 14 A, 2780-027 Oeiras
        </Text>
        <br />
        <Text
          as={"p"}
          fontSize={"0.9rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
        >
          © 2024 CAFELAB. Todos os direitos reservados. <br /> Desenvolvido por
          Young dev.
        </Text>
      </VStack>
      <VStack id="footer__column__two">
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"left"}
          alignSelf={"flex-start"}
          justifySelf={"flex-start"}
        >
          Contact Info
        </Text>
        <Text
          as={"p"}
          fontSize={"0.9rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"left"}
          alignSelf={"flex-start"}
          justifySelf={"flex-start"}
        >
          (+351) 214 420 636
        </Text>
        <Text
          as={"p"}
          fontSize={"0.9rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"left"}
          alignSelf={"flex-start"}
        >
          Email: cafelabpt@gmail.com
        </Text>
        <ContactUsButton />
      </VStack>
      <VStack id="footer__column__three">
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
        >
          Links Importantes
        </Text>
    

        <Link
          href="/termos-servico"
          textDecoration={"none"}
          _hover={{ textDecoration: "underline" }}
        >
          <Text
            as={"p"}
            fontSize={"0.9rem"}
            color={"#718096"}
            fontFamily={"Roboto, sans-serif"}
          >
            Termos De Serviço
          </Text>
        </Link>
        <Link
          href="/politica-reembolso"
          textDecoration={"none"}
          _hover={{ textDecoration: "underline" }}
        >
          <Text
            as={"p"}
            fontSize={"0.9rem"}
            color={"#718096"}
            fontFamily={"Roboto, sans-serif"}
          >
            Política De Reembolso
          </Text>
        </Link>
      </VStack>
      <VStack id="footer__column__four">
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
        >
          Registre-se para receber atualizações
        </Text>
        <InputGroup gap={4} w={"100%"} flexDirection={"column"}>
          <Input
            type="email"
            placeholder="Seu email"
            className="field"
            rounded={"full"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Button
            gap={"1rem"}
            onClick={handleSubmit}
            w={"100%"}
            color={"#2D3748"}
            cursor={"pointer"}
            bg={"RGBA(0, 0, 0, 0.24)"}
            fontFamily={"Roboto, sans-serif"}
            border={"none"}
            _hover={{
              bg: "#fff",
              transition: "0.5s ease in-out",
              border: "1px solid RGBA(0, 0, 0, 0.24)",
            }}
          >
            Inscrever-se
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.1"
              stroke="#2D3748"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </Button>
        </InputGroup>
      </VStack>
    </Box>
  );
}
