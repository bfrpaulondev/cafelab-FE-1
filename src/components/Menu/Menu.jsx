import React, { useState } from "react";
import {
  Link as ChakraLink,
  HStack,
  VStack,
  useMediaQuery,
  CloseButton,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import { Drawer } from "antd";
import Logo from "../Logo/Logo";
import NavbarProfile from "../NavbarProfile/NavbarProfile";
import Cart from "../CartIcon/CartIcon";
import { MenuOutlined } from "@ant-design/icons";
import { MenuLinks, RespMenuLinks } from "./menuItems";
import MenuNavLink from "./MenuNavLink";
import img1 from "./cafelab_subscricao_1080x.jpg";
import img2 from "./meexpresso_900x.jpg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const combo = [...MenuLinks, ...RespMenuLinks];
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const info1 = {
    title: "Depois do cafelab, eu me expresso",
    text: "Para os nossos clientes decididos, ou menos aventureiros. Escolha e monte sua própria subscrição com os cafés que já ama. Selecione três dos nossos cafés especiais e receba todos os meses na sua casa, o melhor do CAFELAB.",
    text2:
      "3 embalagens de 175g em grãos ou moídos de acordo com a sua indicação de consumo. Indique no campo de informações adicionais os cafés escolhidos.",
    text3: "Indique no campo de informações adicionais os cafés escolhidos.",
    description:
      "Subscreva até o dia 25 do mês, para receber os grãos torrados no último forno à lenha de Portugal.",
    img: img2,
  };
  const info2 = {
    title: "Fé no cafelab",
    text: "Para os que nos conhecem, e amam uma surpresa. Quem já pediu, sabe que uma indicação do nosso especialista nunca falha! Receba na sua casa uma coleção de três cafés especiais, escolhidos a dedo todos os meses pelo nosso especialista. E ainda tenha acesso aos nossos cafés exclusivos da assinatura.",
    text2:
      "3 embalagens de 175g em grãos ou moído de acordo com a sua indicação de consumo.",
    description:
      "Subscreva até o dia 25 do mês, para receber os grãos torrados no último forno à lenha de Portugal.",
    img: img1,
  };

  return (
    <>
      {isMobile ? (
        <>
          <Drawer
            title={
              <ChakraLink href="/">
                <Logo src="/icon-512x512.png" alt="CafeLab Logo" />
              </ChakraLink>
            }
            placement={"left"}
            closable={false}
            onClose={onClose}
            open={open}
          >
            <CloseButton
              onClick={onClose}
              sx={{
                color: "#718096",
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                top: "10px",
                width: "48px",
                height: "48px",
                background: "transparent",
                border: "none",
              }}
            />
            <VStack spacing={24} align={"flex-start"} justify={"flex-start"}>
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
              {combo.map((item, index) => (
                <MenuNavLink
                  key={index}
                  href={item.href}
                  name={item.name}
                  state={{ someState: "value" }}
                />
              ))}

              <ContactUsButton />
            </VStack>
          </Drawer>
          <HStack justifyContent={"space-between"} w={"100%"} pl={30}>
            <MenuOutlined onClick={showDrawer} style={{ fontSize: 32 }} />
            <Image src="https://i.ibb.co/2s9Fdb9/logo.png" width="55px" />
            <Cart color="RGBA(0, 0, 0, 0.24)" />
          </HStack>
        </>
      ) : (
        <HStack spacing={20} py={4} ml={50}>
          {MenuLinks.map((item, index) => (
            <MenuNavLink
              key={index}
              href={item.href}
              name={item.name}
              state={{ someState: "value" }}
            />
          ))}
        </HStack>
      )}
    </>
  );
};

export default Menu;
