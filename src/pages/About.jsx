import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionAboutUs from "../components/SectionAboutUs/SectionAboutUs";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      <Header />
      <SectionAboutUs />
      <Footer />
    </Box>
  );
}
