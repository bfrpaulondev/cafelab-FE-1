import React from "react";
import { Box } from "@chakra-ui/react";

interface LogoProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width = "75px",
  height = "auto",
}) => {
  return (
    <Box alignSelf={"flex-start"} justifySelf={"flex-start"}>
      <img
        src={"https://i.ibb.co/2s9Fdb9/logo.png"}
        alt={alt}
        width={width}
        height={height}
      />
    </Box>
  );
};

export default Logo;
