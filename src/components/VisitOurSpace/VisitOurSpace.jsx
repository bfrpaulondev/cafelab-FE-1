import {
  Box,
  Fade,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
export default function VisitOurSpace() {
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  return (
    <>
      {isMobile ? (
        <VStack
          p="24px"
          minH={isMobile ? "300px" : "900px"}
          bg="#ffff"
          flexDirection={"column"}
          maxW={isMobile ? "100vw" : "50vw"}
          w="100%"
          justifyContent={"flex-start"}
          alignItems={"center"}
          display={"flex"}
          transitionProperty="opacity, transform"
          transitionDuration="1.5s"
          transitionTimingFunction="ease"
        >
          <Fade in={true} delay={0.2} style={{ paddingBottom: "2rem" }}>
            <Text
              as={"span"}
              fontSize={isMobile ? "1.5rem" : "2.9rem"}
              fontFamily={"Roboto, sans-serif"}
              color="#00000"
              fontWeight="semibold"
            >
              VISITE O NOSSO ESPAÇO
            </Text>
          </Fade>
          {isMobile ? (
            <VStack w={"100%"} justifyContent={"center"} alignItems={"center"}>
              <Text
                as={"span"}
                textAlign={"center"}
                fontSize={isMobile ? "1.2rem" : "1.9rem"}
                fontFamily={"Roboto, sans-serif"}
                color="#00000"
                fontWeight="semibold"
              >
                A PRIMEIRA LOJA DE CAFÉ DE ESPECIALIDADE EM OEIRAS.
              </Text>
              {isMobile ? (
                <HStack
                  maxW={isMobile ? "80vw" : "100vw"}
                  w={"100%"}
                  justifyContent={isMobile ? "center" : "flex-start"}
                  alignItems={"center"}
                >
                  <Text
                    as={"span"}
                    textAlign={"center"}
                    fontSize={isMobile ? "1.2rem" : "1.9rem"}
                    fontFamily={"Roboto, sans-serif"}
                    color="#00000"
                    fontWeight="semibold"
                  >
                    PET & WORK FRIENDLY
                  </Text>
                  <Image
                    src={"https://i.ibb.co/4sgDMyF/74638d9e1c38.png"}
                    w={"50px"}
                    h={"50px"}
                    alignSelf={"flex-start"}
                  />
                </HStack>
              ) : (
                <HStack>
                  <Text
                    as={"span"}
                    fontSize="1.9rem"
                    fontFamily={"Roboto, sans-serif"}
                    color="#00000"
                    fontWeight="semibold"
                  >
                    PET & WORK FRIENDLY
                  </Text>
                  <Image
                    src={"https://i.ibb.co/4sgDMyF/74638d9e1c38.png"}
                    w={"50px"}
                    h={"50px"}
                  />
                </HStack>
              )}

              <Fade in={true} delay={0.5}>
                <HStack position="relative" w={isMobile ? "90vw" : "50vw"}>
                  <Image
                    src={"https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"}
                    objectFit={"cover"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"15px"}
                    alt="visit our space"
                  />
                </HStack>
              </Fade>
            </VStack>
          ) : (
            <VStack
              w={isMobile ? "100%" : "100%"}
              bg="#ffff"
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={isMobile ? "0" : "1rem"}
              top={isMobile ? "10%" : "3%"}
              gap={"1rem"}
              direction={"column"}
              backdropFilter={"blur(3.3px)"}
              borderColor={"rgba(23, 25, 35, 0.3)"}
            >
              <Text
                as={"span"}
                fontSize="1.9rem"
                fontFamily={"Roboto, sans-serif"}
                textAlign={"center"}
                color="#00000"
                fontWeight="semibold"
              >
                A PRIMEIRA LOJA DE CAFÉ DE ESPECIALIDADE EM OEIRAS.
              </Text>
              <HStack>
                <Text
                  as={"span"}
                  fontSize="1.9rem"
                  fontFamily={"Roboto, sans-serif"}
                  color="#00000"
                  fontWeight="semibold"
                >
                  PET & WORK FRIENDLY
                </Text>
              </HStack>

              <HStack
                position="relative"
                w={"50vw"}
                justify={"center"}
                alignItems={"center"}
              >
                <Image
                  src={"https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"}
                  objectFit={"cover"}
                  w={isMobile ? "100%" : "90%"}
                  zIndex={1}
                  h={"100%"}
                  minH={isMobile ? "300px" : "600px"}
                  borderRadius={"15px"}
                  alt="visit our space"
                />
              </HStack>
            </VStack>
          )}
        </VStack>
      ) : (
        <VStack
          p="24px"
          minH={isMobile ? "300px" : "900px"}
          bg="#ffff"
          w={isMobile ? "100vw" : "50vw"}
          flexDirection={"column"}
          maxW={isMobile ? "100vw" : "50vw"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          display={"flex"}
          transitionProperty="opacity, transform"
          transitionDuration="1.5s"
          transitionTimingFunction="ease"
        >
          <Fade in={true} delay={0.2} style={{ paddingBottom: "2rem" }}>
            <Text
              as={"span"}
              fontSize={isMobile ? "1.5rem" : "2.9rem"}
              fontFamily={"Roboto, sans-serif"}
              color="#00000"
              fontWeight="semibold"
            >
              VISITE O NOSSO ESPAÇO
            </Text>
          </Fade>
          {isMobile ? (
            <VStack w={"100%"} justifyContent={"center"} alignItems={"center"}>
              <Text
                as={"span"}
                textAlign={"center"}
                fontSize={isMobile ? "1.2rem" : "1.9rem"}
                fontFamily={"Roboto, sans-serif"}
                color="#00000"
                fontWeight="semibold"
              >
                A PRIMEIRA LOJA DE CAFÉ DE ESPECIALIDADE EM OEIRAS.
              </Text>
              {isMobile ? (
                <HStack
                  maxW={isMobile ? "80vw" : "100vw"}
                  w={"100%"}
                  justifyContent={isMobile ? "center" : "flex-start"}
                  alignItems={"center"}
                >
                  <Text
                    as={"span"}
                    textAlign={"center"}
                    fontSize={isMobile ? "1.2rem" : "1.9rem"}
                    fontFamily={"Roboto, sans-serif"}
                    color="#00000"
                    fontWeight="semibold"
                  >
                    PET & WORK FRIENDLY
                  </Text>
                </HStack>
              ) : (
                <HStack>
                  <Text
                    as={"span"}
                    fontSize="1.9rem"
                    fontFamily={"Roboto, sans-serif"}
                    color="#00000"
                    fontWeight="semibold"
                  >
                    PET & WORK FRIENDLY
                  </Text>
                  <Image
                    src={"https://i.ibb.co/4sgDMyF/74638d9e1c38.png"}
                    w={"50px"}
                    h={"50px"}
                  />
                </HStack>
              )}

              <Fade in={true} delay={0.5}>
                <HStack position="relative" w={isMobile ? "90vw" : "50vw"}>
                  <Image
                    src={"https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"}
                    objectFit={"cover"}
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"15px"}
                    alt="visit our space"
                  />
                </HStack>
              </Fade>
            </VStack>
          ) : (
            <VStack
              w={isMobile ? "100%" : "100%"}
              bg="#ffff"
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={isMobile ? "0" : "1rem"}
              top={isMobile ? "10%" : "3%"}
              gap={"1rem"}
              direction={"column"}
              backdropFilter={"blur(3.3px)"}
              borderColor={"rgba(23, 25, 35, 0.3)"}
            >
              <Text
                as={"span"}
                fontSize="1.9rem"
                fontFamily={"Roboto, sans-serif"}
                textAlign={"center"}
                color="#00000"
                fontWeight="semibold"
              >
                A PRIMEIRA LOJA DE CAFÉ DE ESPECIALIDADE EM OEIRAS.
              </Text>
              <HStack>
                <Text
                  as={"span"}
                  fontSize="1.9rem"
                  fontFamily={"Roboto, sans-serif"}
                  color="#00000"
                  fontWeight="semibold"
                >
                  PET & WORK FRIENDLY
                </Text>
              </HStack>

              <HStack
                position="relative"
                w={"50vw"}
                justify={"center"}
                alignItems={"center"}
              >
                <Image
                  src={"https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"}
                  objectFit={"cover"}
                  w={isMobile ? "100%" : "90%"}
                  zIndex={1}
                  h={"100%"}
                  minH={isMobile ? "300px" : "600px"}
                  borderRadius={"15px"}
                  alt="visit our space"
                />
              </HStack>
            </VStack>
          )}
        </VStack>
      )}
    </>
  );
}
