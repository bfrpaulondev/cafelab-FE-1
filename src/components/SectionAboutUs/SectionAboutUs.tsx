import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";
import { isMobile } from "react-device-detect";

export default function SectionAboutUs() {
  return (
    <Box
      bg={"#E2E8F0"}
      mt={"107px"}
      minH={"700px"}
      maxW={"100vw"}
      w={"100%"}
      position={"relative"}
      backgroundSize={"cover"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"1rem"}
      p={"2rem"}
    >
      <Image
        src="https://i.ibb.co/2s9Fdb9/logo.png"
        alt="logo"
        width="100px"
        height="100px"
      />
      <VStack
        align={"flex-start"}
        justify={"flex-start"}
        w={isMobile ? "90vw" : "60vw"}
      >
        <Text
          as={"p"}
          fontSize={"2.3rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"center"}
          mb={"1rem"}
          alignSelf={"center"}
        >
          Nossa Origem
        </Text>
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"justify"}
        >
          A origem de todas as coisas começa pela paixão.
        </Text>
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"justify"}
        >
          A paixão pelo café da tarde, o sabor matinal, do cheiro da casa da
          avó, o café com bolo e até o expresso da reunião. Em cada um a paixão
          nasce de forma individual, mas nada é tão coletivo como compartilhar
          um café.
        </Text>
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"justify"}
        >
          O Cafelab é a origem da nossa paixão, que veio para compartilhar os
          sabores dos grãos torrados de vários continentes.
        </Text>
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"justify"}
        >
          Somos uma loja de café de especialidade, onde os grãos são importados
          ainda verdes de vários países. A torrefação dos grãos de cafés é feita
          como nos anos 1950, em forno a lenha, preservando e mantendo seus
          paladares originais.
        </Text>
        <Text
          as={"p"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          textAlign={"justify"}
        >
          A venda do nosso café e acessórios é feita na nossa loja física ou
          online, com toda segurança, qualidade e comodidade. Oferecemos cafés
          de diferentes países, aromas e intensidades, e os consumidores podem
          escolher o café em grão ou moído.
        </Text>
      </VStack>
    </Box>
  );
}
