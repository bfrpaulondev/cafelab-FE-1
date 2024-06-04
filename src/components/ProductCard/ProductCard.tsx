import React from "react";
import { Box, Text, Image, VStack, Button } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const ProductCard = ({ product, isSelected, onSelect }) => {
  return (
    <SwiperSlide>
      <Box borderRadius={10} maxW={350} w={"100%"} bg={"#fff"}>
        <Image src={product.picture} maxW={"100%"} borderTopRadius={5} />
        <VStack alignItems={"center"} p={20}>
          <Text
            fontWeight={600}
            maxW={200}
            textAlign={"center"}
            fontSize={20}
            mb={5}
          >
            {product.title}
          </Text>
          <Text
            color={"#718096"}
            maxW={210}
            textAlign={"center"}
            mb={5}
            fontWeight={500}
          >
            {product.description}
          </Text>
          <Button
            gap={"1rem"}
            w={"200px"}
            height={50}
            color={"#2D3748"}
            cursor={"pointer"}
            bg={"white"}
            fontFamily={"Roboto, sans-serif"}
            border={"solid"}
            onClick={onSelect}
          >
            {isSelected ? "Desmarcar" : "Selecionar"}
          </Button>
        </VStack>
      </Box>
    </SwiperSlide>
  );
};

export default ProductCard;
