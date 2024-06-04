import { Input, Flex, HStack } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/Slicers/storeSlice";

const InputNumber = ({ quantity, id }) => {
  const dispatch = useDispatch();

  const Increase = () => {
    dispatch(increaseQuantity({ id }));
  };

  const Decrease = () => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <HStack>
      <Flex
        cursor={"pointer"}
        h={30}
        w={30}
        bg={"#CBD5E0"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={5}
        fontSize={10}
        color={"#4A5568"}
        onClick={Decrease}
      >
        <MinusIcon />
      </Flex>
      <Input
        type="text" // Set type to text
        inputMode="numeric" // Set input mode to numeric
        pattern="[0-9]*" // Allow only numeric input
        value={quantity}
        w={40}
        h={30}
        fontSize={20}
        textAlign={"center"}
        border={"#CBD5E0 solid 2px"}
        outline={"none"}
        margin={0}
      />
      <Flex
        cursor={"pointer"}
        h={30}
        w={30}
        bg={"#CBD5E0"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={5}
        fontSize={10}
        color={"#4A5568"}
        onClick={Increase}
      >
        <AddIcon />
      </Flex>
    </HStack>
  );
};

InputNumber.propTypes = {
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default InputNumber;
