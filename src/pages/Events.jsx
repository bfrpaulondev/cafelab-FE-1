import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroEventsSection from "../components/HeroEventsSection/HeroEventsSection";
import EventsSection from "../components/EventsSection/EventsSection";

export default function Events() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Header />
      <HeroEventsSection />
      <EventsSection />
      <Footer />
    </Box>
  );
}
