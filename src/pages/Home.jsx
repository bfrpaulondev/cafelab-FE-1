import Header from "../components/Header/Header";
import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import Footer from "../components/Footer/Footer";
import { Box, ChakraProvider, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import VisitOurSpace from "../components/VisitOurSpace/VisitOurSpace";
import SpringMenuBanner from "../components/SpringMenuBanner/SpringMenuBanner";
import HomeEventsSection from "../components/HomeEventsSection/HomeEventsSection";
import InstallPrompt from "../utils/InstallPrompt/InstallPrompt";
export default function Home() {
  const [mobile] = useMediaQuery("(max-width: 992px)");

  return (
    <ChakraProvider>
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
      <InstallPrompt />
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
    </ChakraProvider>
  );
}
