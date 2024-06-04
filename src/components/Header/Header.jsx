import React, { useState, useEffect } from "react";
import "./Header.css";
import Menu from "../Menu/Menu";
import {
  HStack,
  Flex,
  useMediaQuery,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavbarProfile from "../NavbarProfile/NavbarProfile";
import Cart from "../CartIcon/CartIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <HStack
          justifyContent="center"
          bg={isScrolled ? "rgba(237, 242, 247, 0.9)" : "#fff"}
          w={"100%"}
          zIndex={3}
          position={"fixed"}
          top={0}
          h={"80px"}
          transition="background-color 0.3s ease-in-out"
        >
          <Menu />
        </HStack>
      ) : (
        <HStack
          justifyContent="space-around"
          bg={isScrolled ? "rgba(237, 242, 247, 0.9)" : "#fff"}
          w={"100%"}
          maxW={"100vw"}
          zIndex={3}
          position={"fixed"}
          top={0}
          transition="background-color 0.3s ease-in-out"
          h={100}
        >
          <Flex>
            <Link to={{ pathname: "/", state: { fromHeader: true } }}>
              <Logo src="https://i.ibb.co/2s9Fdb9/logo.png" alt="" />
            </Link>
            <Menu />
          </Flex>
          <Flex align={"center"}>
            <Cart color="#718096" />
            {isLoggedIn ? (
              <NavbarProfile
                label="Perfil"
                image="https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"
              />
            ) : (
              <Text
                fontSize="lg"
                fontWeight="bold"
                sx={{
                  cursor: "pointer",
                  color: "#718096",
                  fontFamily: "Roboto, sans-serif",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </Text>
            )}
          </Flex>
        </HStack>
      )}
    </>
  );
}
