import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroContactUs from "../components/HeroContactUs/HeroContactUs";
import SectionContactUs from "../components/SectionContactUs/SectionContactUs";
import ContactForm from "../components/ContactForm/ContactForm";
import Mapa from "../components/Mapa/Mapa";
import WebLocation from "../components/WebLocation/WebLocation";
export default function ContactUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      <Header />
      <HeroContactUs label={"CONTATO"} link={"/contacto"} />
      <WebLocation name={"Contato"} link={"/contacto"} />
      <SectionContactUs />
      <ContactForm />
      <Mapa src="/src/assets/mapa.png" alt="mapa" width="100%" />
      <Footer />
    </Box>
  );
}
