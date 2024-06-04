import React from "react";
import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import { ContInfoVars } from "./ContInfoVars";
import ContInfoComp from "./ContInfoComp";
import "./SectionContactUs.css";
export default function SectionContactUs() {
  const wWidth = window.innerWidth;

  return (
    <HStack
      w={"100%"}
      maxW={"80vw"}
      justifyContent={"space-between"}
      pt={"3rem"}
      flexWrap={"wrap"}
    >
      <VStack
        bg={"bege"}
        display={"flex"}
        alignItems={wWidth > 1036 ? "flex-start" : "center"}
        flexGrow={1}
      >
        <Box>
          {ContInfoVars.map((item, index) => (
            <ContInfoComp
              key={index}
              type={item.type}
              title={item.title}
              info={item.info}
            />
          ))}
        </Box>
      </VStack>
      <VStack
        flexGrow={1}
        alignItems={wWidth > 1036 ? "flex-end" : "center"}
        mt={20}
      >
        <Image
          src="https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"
          maxW={"512px"}
          w={"100%"}
        />
      </VStack>
    </HStack>
  );
}
