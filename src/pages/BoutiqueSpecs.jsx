import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Center,
  Spinner,
  Box,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addtoMarket } from "../redux/Slicers/storeSlice";
import { increaseQuantity } from "../redux/Slicers/storeSlice";

const BoutiqueSpecs = ({ bitems }) => {
  const { id } = useParams();
  const [boutiqueItems, setBoutiqueItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveBoutique = async () => {
      try {
        const data = await bitems();
        setBoutiqueItems(data.data);
      } catch (err) {
        setError("Erro ao carregar os dados. Tente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    retrieveBoutique();
  }, [bitems]);

  const item = boutiqueItems.find((item) => item._id.$oid === id);
  const market = useSelector((state) => state.store.items);

  const addItems = () => {
    const newItem = {
      id: item._id.$oid,
      name: item.name,
      img: item.picture,
      price: item.price,
      quantity: 1,
    };
    const search = market.findIndex((item) => item.id === newItem.id);

    if (search === -1) {
      dispatch(addtoMarket(newItem));
    } else {
      dispatch(increaseQuantity({ id: newItem.id }));
    }
  };

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center height="100vh">
        <Box color="red.500">{error}</Box>
      </Center>
    );
  }

  if (!item) {
    return <Text>Item não encontrado.</Text>;
  }

  return (
    <Box
      sx={{
        maxWidth: "100vw",
      }}
    >
      <Header />
      <Flex
        mb={100}
        mt={200}
        padding={50}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box maxW={1500} w={"100%"}>
          <Flex w={"100%"} justifyContent={"space-between"} flexWrap={"wrap"}>
            <Flex flexDirection={"column"} alignItems={"center"} flexGrow={1}>
              <Image
                src={item.picture}
                alt={item.name}
                w={"100%"}
                maxW={"22rem"}
                maxH={"25rem"}
              />
              <Text
                color={"#718096"}
                mt={20}
                fontSize={"2rem"}
                fontWeight={700}
                fontFamily={"Roboto,sans-serif"}
              >
                {item.name}
              </Text>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"center"} flexGrow={1}>
              <Box maxW={550}>
                <Text
                  color={"#91a2bc"}
                  mt={20}
                  fontSize={"1.2rem"}
                  fontWeight={500}
                  fontFamily={"Roboto,sans-serif"}
                >
                  {item.description}
                </Text>
                <Flex
                  mt={20}
                  fontSize={"1.2rem"}
                  fontWeight={500}
                  fontFamily={"Roboto,sans-serif"}
                  mr={5}
                >
                  <Text color={"#718096"} mr={5} fontWeight={600}>
                    Origem:
                  </Text>
                  <Text color={"#91a2bc"}>{item.origin}</Text>
                </Flex>
                {item.grain && (
                  <Flex
                    mt={20}
                    fontSize={"1.2rem"}
                    fontWeight={500}
                    fontFamily={"Roboto,sans-serif"}
                    mr={5}
                  >
                    <Text color={"#718096"} mr={5} fontWeight={600}>
                      Grãos:
                    </Text>
                    <Text color={"#91a2bc"}>{item.grain}</Text>
                  </Flex>
                )}
                <Flex
                  mt={20}
                  fontSize={"1.2rem"}
                  fontWeight={500}
                  fontFamily={"Roboto,sans-serif"}
                  mr={5}
                >
                  <Text color={"#718096"} mr={5} fontWeight={600}>
                    Preço:
                  </Text>
                  <Text color={"#91a2bc"}>{item.price.toFixed(2)}€</Text>
                </Flex>
                <Button
                  mt={20}
                  py={10}
                  border={0}
                  fontSize={"1.8rem"}
                  cursor={"pointer"}
                  px={20}
                  transition=".5s"
                  _hover={{
                    bg: "#CBD5E0",
                  }}
                  onClick={addItems}
                >
                  Adicionar
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
};

export default BoutiqueSpecs;
