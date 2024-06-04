import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  HStack,
  useMediaQuery,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Importe Link do react-router-dom se estiver usando roteamento

export default function MenuBannerHeroSection({ label, link }) {

  const [isMobile] = useMediaQuery('(max-width: 900px)')
  return (
    <Box
      bg={"#EDF2F7"}
      mt={"107px"}
      minH={"400px"}
      w={"100vw"}
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
            // to="/contacto"
            to={link}
            sx={{
              textDecoration: "none",
              color: "#718096",
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
              <Text
                as={"p"}
                fontSize={"4rem"}
                color={"#718096"}
                fontFamily={"Roboto"}
              >
                {label}
              </Text>
            </Flex>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}
