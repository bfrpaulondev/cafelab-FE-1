import React from "react";
import {
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Importe Link do react-router-dom se estiver usando roteamento

const WebLocation = ({ name, link }) => {
  return (
    <HStack
      bg={"#E2E8F0"}
      maxW={"100vw"}
      w={"100%"}
      h={"63px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={RouterLink}
            to="/"
            textDecoration={"none"}
            fontSize={"1.1rem"}
            color={"#718096"}
            fontFamily={"Roboto, sans-serif"}
          >
            {" "}
            {/* Link para a página inicial */}
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbLink
          as={RouterLink}
          to={link}
          textDecoration={"none"}
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
        >
          {" "}
          {/* Link para a página inicial */}
          {name}
        </BreadcrumbLink>
      </Breadcrumb>
    </HStack>
  );
};

export default WebLocation;
