import Header from "../components/Header/Header";
import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import Footer from "../components/Footer/Footer";
import { Box, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import VisitOurSpace from "../components/VisitOurSpace/VisitOurSpace";
import SpringMenuBanner from "../components/SpringMenuBanner/SpringMenuBanner";
import HomeEventsSection from "../components/HomeEventsSection/HomeEventsSection";
export default function Home() {
  const [mobile] = useMediaQuery("(max-width: 992px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Header />
      <HomeHeroSection />
      {mobile ? (
        <VStack>
          <SpringMenuBanner />
          <VisitOurSpace />
        </VStack>
      ) : (
        <HStack pb={"3rem"} bg="#fffff">
          <SpringMenuBanner />
          <VisitOurSpace />
        </HStack>
      )}
      <HomeEventsSection />
      <Footer />
    </Box>
  );
}
