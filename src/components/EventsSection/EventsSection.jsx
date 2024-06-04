import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import EventService from "../../Services/components/EventService/EventService";
import { Button } from "antd";
import moment from "moment-timezone";
import SwiperCoverflow from "../SwiperCoverflow/SwiperCoverflow";

export default function EventsSection() {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    EventService.getAllEvents().then((response) => {
      const allEvents = response.data.map((event) => ({
        ...event,
        date: new Date(event.date), // Converter a string de data para um objeto Date
      }));

      const upcomingEvents = allEvents.filter(
        (event) => event.date >= new Date()
      );

      const pastEvents = allEvents.filter((event) => event.date < new Date());

      setEvents(upcomingEvents);
      setPastEvents(pastEvents);
    });
  }, []);

  const handleSortChange = (type) => {
    setSortBy(type);
  };

  const sortedEvents = [...events].sort((a, b) => {
    if (sortBy === "date") {
      return a.date - b.date; // Ordenar diretamente os objetos Date
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  const sortedPastEvents = [...pastEvents].sort((a, b) => {
    if (sortBy === "date") {
      return b.date - a.date; // Ordenar diretamente os objetos Date em ordem decrescente
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  // Função para calcular o tempo restante
  const calculateTimeRemaining = (eventDate) => {
    const now = moment().tz("Europe/Lisbon");
    const eventMoment = moment(eventDate).tz("Europe/Lisbon");
    const duration = moment.duration(eventMoment.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
    };
  };

  // Atualizar o timer a cada minuto
  useEffect(() => {
    const intervalId = setInterval(() => {
      setEvents((events) =>
        events.map((event) => ({
          ...event,
          timeRemaining: calculateTimeRemaining(event.date),
        }))
      );
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(intervalId);
  }, [events]);

  return (
    <Flex
      flexDir={"column"}
      minH={"400px"}
      p={"2rem"}
      maxW={"100vw"}
      w={"100%"}
      bg={"#f5f5f5"}
      justifyContent={"center"}
      alignItems={"center"}
      mx={"auto"}
    >
      <Text
        as={"span"}
        fontSize={"1.9rem"}
        fontWeight={"bold"}
        color={"#4A5568"}
        textAlign={"center"}
      >
        AGENDA DE EVENTOS <br /> {new Date().toLocaleDateString()}
      </Text>

      <Box gap={"1rem"} display={"flex"} mt={"30px"}>
        <Button onClick={() => handleSortChange("date")}>
          Ordenar por Data
        </Button>
        <Button onClick={() => handleSortChange("title")}>
          Ordenar por Título
        </Button>
      </Box>

      <Text
        as={"span"}
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color={"#4A5568"}
        textAlign={"center"}
        mt={"20px"}
      >
        Eventos Futuros
      </Text>
      <Box
        p={"15px"}
        mt={"20px"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w={"100%"}
      >
        <SwiperCoverflow
          currentEvents={sortedEvents}
          calculateTimeRemaining={calculateTimeRemaining}
        />
      </Box>

      <Text
        as={"span"}
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color={"#4A5568"}
        textAlign={"center"}
        mt={"40px"}
      >
        Eventos Passados
      </Text>
      <Box
        p={"15px"}
        mt={"20px"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w={"100%"}
      >
        <SwiperCoverflow
          currentEvents={sortedPastEvents}
          calculateTimeRemaining={calculateTimeRemaining}
        />
      </Box>
    </Flex>
  );
}
