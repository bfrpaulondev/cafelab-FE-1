import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const EventCard = ({ event, calculateTime }) => {
  const timeRemaining = calculateTime(event.date);
  return (
    <SwiperSlide>
      <Box borderRadius={10} maxW={350} w={"100%"} bg={"#fff"}>
        <Image
          src={event.picture}
          maxW={"100%"}
          borderTopRadius={5}
        />
        <VStack alignItems={"center"} p={20}>
          <Box
            bg={"#EDF2F7"}
            borderRadius={20}
            color={"#1A202C"}
            px={12}
            py={5}
            fontSize={".9rem"}
            fontWeight={600}
            mb={10}
          >
            {event.date.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            })}
          </Box>

          <Text
            fontWeight={600}
            maxW={200}
            textAlign={"center"}
            fontSize={20}
            mb={5}
          >
            {event.title}
          </Text>
          <Text
            color={"#718096"}
            maxW={210}
            textAlign={"center"}
            mb={5}
            fontWeight={500}
          >
            {event.description}
          </Text>
          <Text color={"#718096"} fontWeight={500}>
            Local: Cafelab
          </Text>
          <Text
            mt={20}
            color={"#535d6d"}
            fontWeight={500}
            mb={30}
            textAlign={"center"}
          >
            Falta {timeRemaining.days} dias para o Evento
          </Text>
        </VStack>
      </Box>
    </SwiperSlide>
  );
};

export default EventCard;
