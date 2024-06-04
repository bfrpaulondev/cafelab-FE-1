import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomeEventsSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const goTo = useNavigate();
  return (
    <>
      {isMobile ? (
        <Box
          as="section"
          bg="#EDF2F7"
          color="gray.800"
          maxW={"100vw"}
          w={"100%"}
          minH={"700px"}
          h={"100%"}
          py="10"
          position={"relative"}
        >
          <Flex
            bg={"rgba(23, 25, 35, 0.5)"}
            borderRadius={"1rem"}
            p={"2rem"}
            direction={"column"}
            boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropFilter={"blur(3.3px)"}
            borderColor={"rgba(23, 25, 35, 0.3)"}
            w={"90vw"}
            textAlign={"center"}
            mx={"auto"}
            pb={"2rem"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            zIndex={1}
          >
            <Text
              as={"p"}
              fontSize={"1.9rem"}
              color={"#fff"}
              fontFamily={"Roboto, sans-serif"}
              textAlign={"left"}
            >
              CALENDÁRIO CULTURAL
            </Text>
            <Text
              as={"p"}
              fontSize={"1.3rem"}
              color={"#fff"}
              fontFamily={"Roboto, sans-serif"}
              textAlign={"left"}
            >
              DESCUBRA NOSSOS PROJETOS E EVENTOS
            </Text>
            <Button
              variant={"outline"}
              bg={"rgba(23, 25, 35, 0.5)"}
              minW={"200px"}
              minH={"50px"}
              mt={"1rem"}
              borderRadius={"0.5rem"}
              fontSize={"1.2rem"}
              color={"#ffff"}
              fontFamily={"Roboto, sans-serif"}
              border={"1px solid #ffff"}
              colorScheme="gray"
              cursor={"pointer"}
              _hover={{
                bg: "rgba(23, 25, 35, 0.7)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => goTo("/eventos")}
            >
              AGENDA
            </Button>
          </Flex>
          <Image
            mt={"2rem"}
            src="https://i.ibb.co/nRQcym6/eda72f9088d1.jpg"
            alt="Cafe Lab Cultural"
            width={"90%"}
            height={"100%"}
            ml={"5%"}
            maxH={"450px"}
            objectFit={"cover"}
            position={"absolute"}
          />
        </Box>
      ) : (
        <Box
          as="section"
          bg="gray.100"
          color="gray.800"
          maxW={"100vw"}
          w={"100%"}
          minH={"700px"}
          h={"100%"}
          py="10"
          position={"relative"}
        >
          <Flex
            bg={"rgba(23, 25, 35, 0.5)"}
            borderRadius={"1rem"}
            p={"2rem"}
            gap={"1rem"}
            direction={"column"}
            boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropFilter={"blur(3.3px)"}
            borderColor={"rgba(23, 25, 35, 0.3)"}
            position={"absolute"}
            w={"300px"}
            pb={"2rem"}
            top={"10%"}
            left={"5%"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            zIndex={1}
          >
            <Text
              as={"p"}
              fontSize={"1.9rem"}
              color={"#fff"}
              fontFamily={"Roboto, sans-serif"}
              textAlign={"left"}
            >
              CALENDÁRIO CULTURAL
            </Text>
            <Text
              as={"p"}
              fontSize={"1.3rem"}
              color={"#fff"}
              fontFamily={"Roboto, sans-serif"}
              textAlign={"left"}
            >
              DESCUBRA NOSSOS PROJETOS E EVENTOS
            </Text>
            <Button
              variant={"outline"}
              bg={"rgba(23, 25, 35, 0.5)"}
              minW={"200px"}
              minH={"50px"}
              borderRadius={"0.5rem"}
              fontSize={"1.2rem"}
              color={"#ffff"}
              fontFamily={"Roboto, sans-serif"}
              border={"1px solid #ffff"}
              colorScheme="gray"
              cursor={"pointer"}
              _hover={{
                bg: "rgba(23, 25, 35, 0.7)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => goTo("/eventos")}
            >
              AGENDA
            </Button>
          </Flex>

          <Image
            src="https://i.ibb.co/nRQcym6/eda72f9088d1.jpg"
            alt="Cafe Lab Cultural"
            width={"100%"}
            height={"100%"}
            maxH={"700px"}
            objectFit={"cover"}
            position={"absolute"}
          />
        </Box>
      )}
    </>
  );
};

export default HomeEventsSection;
