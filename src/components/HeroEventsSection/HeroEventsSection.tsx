import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  HStack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Importe Link do react-router-dom se estiver usando roteamento

export default function HeroEventsSection() {
  return (
    <Box
      bg={"#EDF2F7"}
      mt={"107px"}
      bgSize={"cover"}
      minH={"400px"}
      maxW={"100vw"}
      w={"100%"}
      position={"relative"}
      backgroundSize={"cover"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Breadcrumb
        color={"#718096"}
        zIndex={2}
        bg={"transparent"}
        w={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <BreadcrumbItem>
          <Link
            as={RouterLink}
            to="/eventos"
            sx={{
              textDecoration: "none",
              color: "RGBA(0, 0, 0, 0.24)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <Flex
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
              direction={"column"}
            >
              <Image
                src={"https://i.ibb.co/2s9Fdb9/logo.png"}
                w={"80px"}
                h={"80px"}
              />
              <Text as={"p"} fontSize={"4rem"} color={"#718096"}>
                EVENTOS
              </Text>
            </Flex>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
