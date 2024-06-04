import React from "react";
import { VStack, Image, Text, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { addtoMarket, increaseQuantity } from "../../redux/Slicers/storeSlice";
import { Link } from "react-router-dom";

const BoutiqueItem = ({ name, picture, price, id }) => {
  const img = picture;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.store.items);

  const addItems = () => {
    const newItem = { id, name, img, price, quantity: 1 };
    const search = items.findIndex((item) => item.id === newItem.id);

    if (search === -1) {
      dispatch(addtoMarket(newItem));
    } else {
      dispatch(increaseQuantity({ id: newItem.id }));
    }
  };
  return (
    <VStack>
      <Link to={`/boutique/${id}`}>
        <Image
          src={img}
          maxW="22rem"
          maxH="25rem"
          w="100%"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
          cursor={"pointer"}
        />
      </Link>
      <Text
        mt={20}
        fontSize={"1.1rem"}
        fontWeight={600}
        fontFamily={"Roboto,sans-serif"}
        maxW={"22rem"}
        textAlign={"center"}
      >
        {name}
      </Text>
      <Text
        fontSize={"1.1rem"}
        fontFamily={"Roboto,sans-serif"}
        color={"#A0AEC0"}
        mb={5}
      >
        {price.toFixed(2)}€
      </Text>
      <Button
        py={10}
        border={0}
        fontSize={"1.2rem"}
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
    </VStack>
  );
};

export default BoutiqueItem;
