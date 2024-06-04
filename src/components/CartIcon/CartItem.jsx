import InputNumber from "../InputNumber/InputNumber";
import { Box, CloseButton, Text, Flex, Image, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { onRemove } from "../../redux/Slicers/storeSlice";

const CartItem = ({ name, img, price, id, quantity }) => {
  const dispatch = useDispatch();
  const Remove = () => {
    dispatch(onRemove({ id }));
  };

  return (
    <Box mb={40}>
      <Flex mb={20}>
        <Image src={img} w={75} h={75} borderRadius={"100%"} mr={30} />
        <VStack
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          w={"100%"}
          maxW={"200px"}
        >
          <Text
            fontSize={"1.5em"}
            fontWeight={600}
            color={"#718096"}
            maxW={"11rem"}
          >
            {name}
          </Text>
          <Text fontSize={"1.35em"} fontWeight={600} color={"#CBD5E0"}>
            {price.toFixed(2)}€
          </Text>
        </VStack>
        <VStack justifyContent={"space-between"}>
          <CloseButton
            onClick={Remove}
            sx={{
              color: "#718096",
              cursor: "pointer",
              width: "48px",
              mt: "5px",
              background: "transparent",
              border: "none",
              maxW: "1",
            }}
          />
        </VStack>
      </Flex>
      <InputNumber quantity={quantity} id={id} />
    </Box>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
