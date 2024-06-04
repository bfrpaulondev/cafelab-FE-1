import React from "react";
import Header from "../components/Header/Header";
import SectionRefundPolicy from "../components/SectionRefundPolicy/SectionRefundPolicy";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

export default function RefundPolicy() {
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
      <SectionRefundPolicy />
      <Footer />
    </Box>
  );
}
