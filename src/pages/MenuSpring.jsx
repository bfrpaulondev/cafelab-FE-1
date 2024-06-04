import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import Mapa from "../components/Mapa/Mapa";
import MenuSpringSection from "../components/MenuSpringSection/MenuSpringSection";
import MenuBannerHeroSection from "../components/MenuBannerHeroSection/MenuBannerHeroSection";
import WebLocation from "../components/WebLocation/WebLocation";
export default function MenuSpring() {
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
      <MenuBannerHeroSection label={"MENU"} link={"/menu-primavera"} />
      <WebLocation name={"Menu"} link={"/menu-primavera"} />
      <MenuSpringSection />
      <Footer />
    </Box>
  );
}
