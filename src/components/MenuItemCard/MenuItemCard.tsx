// MenuItemCard.tsx
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface MenuItemCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  return (
    <HStack
      bg="rgba(255, 255, 255, 0.3)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(5px)"
      filter={"brightness(100%)"}
      border="1px solid rgba(255, 255, 255, 0.3)"
      borderRadius="1rem"
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={2}
      p={4}
      maxW="sm"
      textAlign="center"
      m={4}
    >
     <VStack align={"center"} justify={"center"} p={"1rem"}>
      <Image borderRadius="100px" w={"50px"} h={"50px"}  src={imageUrl} alt={title} alignSelf={"center"} justifySelf={"center"} />
     </VStack> 
      <VStack spacing={2} textAlign={"left"} justify={"flex-start"} align={"flex-start"}>
        <Text fontSize="1.1rem" fontWeight="bold" color="black" fontFamily={"Roboto, sans-serif"}>
          {title}
        </Text>
        <Text fontSize="md" color="black" fontFamily={"Roboto, sans-serif"}>
          {description}
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="black" fontFamily={"Roboto, sans-serif"}>
          ${price.toFixed(2)}
        </Text>
      </VStack>
    </HStack>
  );
};

export default MenuItemCard;
