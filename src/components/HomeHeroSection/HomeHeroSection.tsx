import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeHeroSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 992px)");

  const goTo = useNavigate();
  return (
    <>
      {isMobile ? (
        <Flex
          as="section"
          w="100%"
          p={"1rem"}
          bg={"#EDF2F6"}
          minH={"500px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"80px"}
        >
          <VStack
            bg={"rgba(23, 25, 35, 0.5)"}
            borderRadius={"1rem"}
            p={"2rem"}
            w={"90vw"}
            mt={"1rem"}
            boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropFilter={"blur(3.3px)"}
            borderColor={"rgba(23, 25, 35, 0.3)"}
          >
            <Text
              as={"h1"}
              fontSize={"3rem"}
              color={"#ffff"}
              fontFamily={"Roboto, sans-serif"}
              zIndex={1}
            >
              Cafelab
            </Text>
            <Text
              as={"p"}
              fontSize={"1.2rem"}
              color={"#fff"}
              fontFamily={"Roboto, sans-serif"}
              zIndex={1}
            >
              Uma nova loja! O seu novo café!
            </Text>
          </VStack>
          {isMobile ? (
            <VStack justify={"center"} w="100%" mt={"2rem"}>
              <Button
                bg={"rgba(23, 25, 35, 0.5)"}
                minW={"90vw"}
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
                onClick={() => goTo("/subscricao")}
              >
                SUBSCRIÇÃO
              </Button>
              <Button
                bg={"rgba(23, 25, 35, 0.5)"}
                minW={"90vw"}
                minH={"50px"}
                borderRadius={"0.5rem"}
                fontSize={"1.2rem"}
                cursor={"pointer"}
                color={"#ffff"}
                fontFamily={"Roboto, sans-serif"}
                border={"1px solid #ffff"}
                colorScheme="gray"
                variant="outline"
                _hover={{
                  bg: "rgba(23, 25, 35, 0.7)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => goTo("/boutique")}
              >
                BOUTIQUE
              </Button>
              <Image
                src="https://i.ibb.co/7YxdVF2/39733107ad1c.jpg"
                objectFit={"cover"}
                maxW={"90vw"}
              />
            </VStack>
          ) : (
            <HStack justify={"center"} w="100%" mt={"2rem"}>
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
                onClick={() => goTo("/subscricao")}
              >
                SUBSCRIÇÃO
              </Button>
              <Button
                bg={"rgba(23, 25, 35, 0.5)"}
                minW={"200px"}
                minH={"50px"}
                borderRadius={"0.5rem"}
                fontSize={"1.2rem"}
                cursor={"pointer"}
                color={"#ffff"}
                fontFamily={"Roboto, sans-serif"}
                border={"1px solid #ffff"}
                colorScheme="gray"
                variant="outline"
                _hover={{
                  bg: "rgba(23, 25, 35, 0.7)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => goTo("/boutique")}
              >
                BOUTIQUE
              </Button>
            </HStack>
          )}
        </Flex>
      ) : (
        <Flex
          as="section"
          w="100%"
          p={"1rem"}
          bgImage={"https://i.ibb.co/7YxdVF2/39733107ad1c.jpg"}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          minH={"500px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={107}
        >
          <Image
            alt="logo"
            width="100px"
            src={"https://i.ibb.co/2s9Fdb9/logo.png"}
            zIndex={1}
          />
          <VStack
            bg={"rgba(23, 25, 35, 0.5)"}
            borderRadius={"1rem"}
            p={"2rem"}
            boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropFilter={"blur(3.3px)"}
            borderColor={"rgba(23, 25, 35, 0.3)"}
          >
            <Text
              as={"h1"}
              fontSize={"3rem"}
              color={"#ffff"}
              fontFamily={"Roboto, sans-serif"}
              zIndex={1}
            >
              Cafelab
            </Text>
            <Text
              as={"p"}
              fontSize={"1.2rem"}
              color={"#fff"}
              fontFamily={"Roboto, sans-serif"}
              zIndex={1}
            >
              Uma nova loja! O seu novo café!
            </Text>
          </VStack>
          {isMobile ? (
            <VStack justify={"center"} w="100%" mt={"2rem"}>
              <Button
                bg={"rgba(23, 25, 35, 0.5)"}
                minW={"90vw"}
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
                onClick={() => goTo("/subscricao")}
              >
                SUBSCRIÇÃO
              </Button>
              <Button
                bg={"rgba(23, 25, 35, 0.5)"}
                minW={"90vw"}
                minH={"50px"}
                borderRadius={"0.5rem"}
                fontSize={"1.2rem"}
                cursor={"pointer"}
                color={"#ffff"}
                fontFamily={"Roboto, sans-serif"}
                border={"1px solid #ffff"}
                colorScheme="gray"
                variant="outline"
                _hover={{
                  bg: "rgba(23, 25, 35, 0.7)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => goTo("/boutique")}
              >
                BOUTIQUE
              </Button>
            </VStack>
          ) : (
            <HStack justify={"center"} w="100%" mt={"2rem"}>
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
                onClick={() => goTo("/subscricao")}
              >
                SUBSCRIÇÃO
              </Button>
              <Button
                bg={"rgba(23, 25, 35, 0.5)"}
                minW={"200px"}
                minH={"50px"}
                borderRadius={"0.5rem"}
                fontSize={"1.2rem"}
                cursor={"pointer"}
                color={"#ffff"}
                fontFamily={"Roboto, sans-serif"}
                border={"1px solid #ffff"}
                colorScheme="gray"
                variant="outline"
                _hover={{
                  bg: "rgba(23, 25, 35, 0.7)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => goTo("/boutique")}
              >
                BOUTIQUE
              </Button>
            </HStack>
          )}
        </Flex>
      )}
    </>
  );
};

export default HomeHeroSection;
