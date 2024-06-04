import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionTermsOfService from "../components/SectionTermsOfService/SectionTermsOfService";

export default function TermsOfService() {
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
      <SectionTermsOfService />
      <Footer />
    </Box>
  );
}
