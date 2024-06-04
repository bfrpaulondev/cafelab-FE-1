import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface MapaProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Mapa: React.FC<MapaProps> = ({ width, height = "700px" }) => {
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/CafeLab/@38.694561,-9.3068481,17z/data=!4m6!3m5!1s0xd1ec94d41d8efab:0xc840651627ec24c!8m2!3d38.6945568!4d-9.3042732!16s%2Fg%2F11smz6qnmn?entry=ttu",
      "_blank"
    );
  };
  return (
    <Box
      bg={"gray.50"}
      alignSelf={"flex-start"}
      justifySelf={"flex-start"}
      w={"100%"}
      onClick={handleClick}
      cursor={"pointer"}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.0123336900283!2d-9.306848123536865!3d38.69456095864595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec94d41d8efab%3A0xc840651627ec24c!2sCafeLab!5e0!3m2!1spt-PT!2spt!4v1716292055660!5m2!1spt-PT!2spt"
        width={width}
        height={height}
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default Mapa;
