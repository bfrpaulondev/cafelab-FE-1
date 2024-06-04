import { Box, CloseButton, Text, Divider, Button } from "@chakra-ui/react";
import { Badge } from "antd";
import { Drawer } from "antd";
import { useState } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { Clean } from "../../redux/Slicers/storeSlice";

const Cart = ({ color }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const Empty = () => {
    dispatch(Clean());
  };

  const items = useSelector((state) => state.store.items);
  const total = useSelector((state) => state.store.total);
  const amount = useSelector((state) => state.store.amount);

  return (
    <>
      <Box mr={30} cursor={"pointer"} onClick={showDrawer}>
        <Badge count={amount} color="gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill={color}
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
        </Badge>
      </Box>

      <Drawer placement="right" closable={false} onClose={onClose} open={open}>
        <CloseButton
          onClick={onClose}
          sx={{
            color: "#718096",
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            top: "10px",
            width: "48px",
            height: "48px",
            background: "transparent",
            border: "none",
          }}
        />
        <Text color={"#718096"} mt={30} fontSize={"2rem"} textAlign={"center"}>
          Carrinho de Compras
        </Text>
        <Divider background={"#EDF2F7"} mt={10} mb={50} h={2} w={"100%"} />
        <>
          {items?.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </>
        <Divider background={"#EDF2F7"} mt={10} mb={10} h={2} w={"100%"} />
        <Text
          textAlign={"right"}
          color={"#718096"}
          fontWeight={600}
          fontSize={20}
        >
          <>{total?.toFixed(2)}€</>
        </Text>
        <Button
          gap={"1rem"}
          w={"100%"}
          mt={"2rem"}
          h={"50px"}
          fontWeight={"500"}
          cursor={"pointer"}
          border={"1px solid #dc3545"}
          color={"#dc3545"}
          bg={"#fff"}
          fontSize={"0.9rem"}
          fontFamily={"Roboto, sans-serif"}
          transition={".5s"}
          _hover={{
            bg: "#dc3545",
            color: "#fff",
            border: "none",
          }}
          onClick={Empty}
        >
          Esvaziar Carrinho
        </Button>
        <Button
          gap={"1rem"}
          w={"100%"}
          mt={"1.25rem"}
          h={"50px"}
          color={"#979ba0"}
          cursor={"pointer"}
          bg={"#fff"}
          fontSize={"0.9rem"}
          fontFamily={"Roboto, sans-serif"}
          border={"1px solid #979ba0"}
          transition={".25s"}
          _hover={{
            bg: "#979ba0",
            border: "none",
            color: "#FFF",
          }}
          onClick={() => {
            navigate("/checkout", { state: {type:"payment"} });
          }}
        >
          Checkout
        </Button>
      </Drawer>
    </>
  );
};

Cart.propTypes = {
  color: PropTypes.string,
};
export default Cart;
