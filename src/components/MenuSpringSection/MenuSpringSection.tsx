import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  HStack,
  Button,
  Flex,
  IconButton,
  useColorModeValue,
  useMediaQuery,
  position,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const MenuSpringSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const itemsPerPage = isMobile ? 5 : 12;
  useEffect(() => {
    fetch("https://coffelab-api.onrender.com/product/all")
      .then((response) => response.json())
      .then((data) =>
        setMenuItems(data.data.filter((item) => item.section === "MENU"))
      )
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const buttonBg = useColorModeValue("#E2E8F0", "#2D3748");
  const buttonHoverBg = useColorModeValue("#CBD5E0", "#4A5568");
  const activeButtonBg = useColorModeValue("#38B2AC", "#2C7A7B");
  const buttonTextColor = useColorModeValue("#1A202C", "#F7FAFC");

  return (
    <VStack
      minH={"80vh"}
      w={"100%"}
      maxW={"100vw"}
      mb={"1rem"}
      p={5}
      justifyContent={"space-between"}
    >
      <Box w={"100%"}>
        <Heading
          mb={4}
          fontFamily={"Roboto, sans-serif"}
          fontSize={"2.5rem"}
          textAlign={"center"}
          pt={"2rem"}
          pb={"1rem"}
          color={"#718096"}
        >
          Menu Primavera
        </Heading>
        <SimpleGrid
          columns={isMobile ? 1 : 3}
          spacing={10}
          pl={"2rem"}
          pr={"2rem"}
          mb={isMobile ? "4rem" : "0rem"}
        >
          {currentItems.map((item, index) => (
            <Box
              key={index}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderColor={"gray"}
            >
              <VStack align="stretch" justify={"center"} mb={"2rem"}>
                <HStack justify={"flex-start"} gap={"1rem"}>
                  {item.picture && item.picture !== "" && (
                    <Image
                      w={24}
                      h={24}
                      borderRadius="2rem"
                      src={item.picture}
                      alt={item.name}
                      mb={4}
                      fontFamily={"Roboto, sans-serif"}
                    />
                  )}
                  <Heading
                    size="md"
                    color={"#718096"}
                    fontFamily={"Roboto, sans-serif"}
                  >
                    {item.name}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    alignSelf={"center"}
                    justifySelf={"flex-end"}
                    fontFamily={"Roboto, sans-serif"}
                    color={"#718096"}
                  >
                    {item.price.toFixed(2)}€
                  </Text>
                </HStack>
                <Text
                  fontSize="sm"
                  fontFamily={"Roboto, sans-serif"}
                  color={"#718096"}
                >
                  {item.description}
                </Text>
              </VStack>
              <hr />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Flex
        mt={4}
        left={isMobile ? "0" : "2rem"}
        bottom={"0"}
        justifySelf={"end"}
        alignSelf={"center"}
        flexWrap={"wrap"}
      >
        <IconButton
          w={50}
          h={50}
          border={"none"}
          clipPath="polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)"
          icon={<ChevronLeftIcon />}
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          mr={2}
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          color={buttonTextColor}
          borderRadius="full"
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            w={50}
            h={50}
            border={"none"}
            key={index}
            onClick={() => handlePageChange(index + 1)}
            variant="outline"
            mx={1}
            fontSize={"0.8rem"}
            bg={currentPage === index + 1 ? activeButtonBg : buttonBg}
            color={currentPage === index + 1 ? buttonTextColor : "#4A5568"}
            _hover={{ bg: buttonHoverBg }}
            borderRadius="1rem"
          >
            {index + 1}
          </Button>
        ))}
        <IconButton
          w={50}
          h={50}
          clipPath="polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
          border={"none"}
          icon={<ChevronRightIcon />}
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          ml={2}
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          color={buttonTextColor}
          borderRadius="full"
        />
      </Flex>
    </VStack>
  );
};

export default MenuSpringSection;
