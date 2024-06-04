import React, { useState } from "react";
import { Link, Box, Text } from "@chakra-ui/react";
import { Avatar } from "antd";

const NavbarProfile: React.FC<{ label: string; image: string }> = ({
  label,
  image,
}) => {
  return (
    <Link
      href="/perfil"
      sx={{ textDecoration: "none" }}
      _hover={{ textDecoration: "underline" }}
      right={"4rem"}
    >
      <Box
        display={"flex"}
        gap={"1rem"}
        alignItems={"center"}
        sx={{
          cursor: "pointer",
          color: "#718096",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Avatar
          src="https://i.ibb.co/g4qC34T/e40da8c9c370.jpg"
          alt={"profile image"}
          w={"3rem"}
          h={"3rem"}
          borderRadius={"50%"}
        />
        <Text
          fontSize="lg"
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            color: "#718096",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {label}
        </Text>
      </Box>
    </Link>
  );
};

export default NavbarProfile;
