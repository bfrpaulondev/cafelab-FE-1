import {
  Button,
  Fade,
  Flex,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SpringMenuBanner = () => {
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const goTo = useNavigate();
  return (
    <Flex
      bg="#fff"
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      maxW={isMobile ? "100vw" : "50vw"}
      w={"100%"}
    >
      <VStack
        mt={isMobile ? "0" : "100px"}
        w={"100%"}
        h={"100%"}
        minH={"600px"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Flex
          position={isMobile ? "relative" : "absolute"}
          bg={"rgba(23, 25, 35, 0.5)"}
          w={isMobile ? "90%" : "85%"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"1rem"}
          top={isMobile ? "10%" : "3%"}
          p={"2rem"}
          gap={"1rem"}
          direction={"column"}
          boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
          backdropFilter={"blur(3.3px)"}
          borderColor={"rgba(23, 25, 35, 0.3)"}
          zIndex={2}
        >
          <Fade in={true}>
            <Text
              as={"h1"}
              fontSize={isMobile ? "1.5rem" : "2.9rem"}
              color={"#ffff"}
              fontFamily={"Roboto, sans-serif"}
              zIndex={2}
            >
              MENU PRIMAVERA
            </Text>
          </Fade>
          <Fade in={true}>
            <Text
              as={"p"}
              fontSize={isMobile ? "1rem" : "1.2rem"}
              color={"#fff"}
              textAlign={"center"}
              fontFamily={"Roboto, sans-serif"}
              zIndex={2}
            >
              DRINKS REFRESCANTES PARA A PRIMAVERA
            </Text>
          </Fade>
          <Fade in={true} delay={0.5} style={{ width: "200px" }}>
            <Button
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
              variant="outline"
              _hover={{
                bg: "rgba(23, 25, 35, 0.7)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => goTo("/menu-primavera")}
            >
              CONHECER
            </Button>
          </Fade>
        </Flex>
        <Image
          src={"https://i.ibb.co/HY80c3Z/85f70280e5d2.jpg"}
          objectFit={"cover"}
          borderRadius={isMobile ? "0" : "1rem"}
          w={"100%"}
          h={"100%"}
          maxW={"90%"}
          maxH={"800px"}
          zIndex={1}
        />
      </VStack>
    </Flex>
  );
};

export default SpringMenuBanner;
