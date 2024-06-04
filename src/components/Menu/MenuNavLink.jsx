import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuNavLink = ({ href, name, state }) => {
  return (
    <Link
      to={{ pathname: href, state: state }}
      style={{ textDecoration: "none" }}
    >
      <Box>
        <Text
          fontSize="lg"
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            color: "#718096",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {name}
        </Text>
      </Box>
    </Link>
  );
};

export default MenuNavLink;
