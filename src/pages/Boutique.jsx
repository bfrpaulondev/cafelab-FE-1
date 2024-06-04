import { Box, Flex, Button, Center, Spinner } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroContactUs from "../components/HeroContactUs/HeroContactUs";
import WebLocation from "../components/WebLocation/WebLocation";
import BoutiqueItem from "../components/BoutiqueItem/BoutiqueItem";
import { useEffect, useState } from "react";

export default function ContactUs({ bitems }) {
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  const [BoutiqueItems, setBoutique] = useState([]);

  useEffect(() => {
    const RetrieveBoutique = async () => {
      try {
        const data = await bitems();
        const boutique = data.data.filter(
          (item) => item.section === "BOUTIQUE" || item.section === "CAFE"
        );
        // Ordena colocando os itens da seção "CAFE" primeiro
        boutique.sort((a, b) => {
          if (a.section === "CAFE" && b.section !== "CAFE") return -1;
          if (a.section !== "CAFE" && b.section === "CAFE") return 1;
          return 0;
        });
        setBoutique(boutique);
      } catch (err) {
        SetError("Erro ao carregar os dados. Tente mais tarde.");
      } finally {
        SetLoading(false);
      }
    };

    RetrieveBoutique();
  }, [bitems]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(BoutiqueItems.length / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <Button
        bg={"#EDF2F7"}
        border={0}
        w={45}
        h={45}
        fontSize={"1.1rem"}
        key={i + 1}
        onClick={() => changePage(i + 1)}
        variant={currentPage === i + 1 ? "solid" : "outline"}
        mr={12}
        cursor={"pointer"}
      >
        {i + 1}
      </Button>
    ));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BoutiqueItems.slice(indexOfFirstItem, indexOfLastItem);

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
      <HeroContactUs label={"BOUTIQUE"} link={"/boutique"} />
      <WebLocation name={"Boutique"} link={"/boutique"} />
      {loading && (
        <Center height="100vh">
          <Spinner size="xl" />
        </Center>
      )}
      {error && (
        <Center height="100vh">
          <Box color="red.500">{error}</Box>
        </Center>
      )}
      <Flex
        gap={100}
        mt={100}
        mb={50}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        p={30}
        maxW={1000}
      >
        {currentItems.map((item, index) => (
          <BoutiqueItem key={index} {...item} id={item._id.$oid} />
        ))}
      </Flex>
      <Flex justifyContent="center" mb={50}>
        <Button
          bg={"#EDF2F7"}
          onClick={prevPage}
          disabled={currentPage === 1}
          mr={12}
          px={15}
          py={5}
          border={0}
          fontSize={"1rem"}
          cursor={"pointer"}
        >
          Anterior
        </Button>
        {renderPageButtons()}
        <Button
          bg={"#EDF2F7"}
          onClick={nextPage}
          disabled={currentPage === totalPages}
          px={15}
          py={5}
          border={0}
          fontSize={"1rem"}
          cursor={"pointer"}
        >
          Próxima
        </Button>
      </Flex>
      <Footer />
    </Box>
  );
}
