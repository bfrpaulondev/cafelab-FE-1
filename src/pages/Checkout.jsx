import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Flex, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CartItemCheckout from "../components/CartItemCheckout/CartItemCheckout";
import { getUserByEmail } from "../Services/LoginService";
import { useLocation, useNavigate } from "react-router-dom";
import OrderService from "../Services/OrderService";
import { Clean } from "../redux/Slicers/storeSlice";

const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function Checkout() {
  const location = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [loading, setLoading] = useState(false);
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const items = useSelector((state) => state.store.items);
  const total = useSelector((state) => state.store.total);
  const loginSession = localStorage.getItem("@_auth_sessions");
  const [userData, setUserData] = useState([]);
  const { type, content } = location.state || {};

  useEffect(() => {
    if (isLoggedIn) {
      const sessionData = JSON.parse(atob(loginSession));
      getUserByEmail(sessionData.email)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao obter conta:", error);
        });
    }
  }, [isLoggedIn, loginSession]);

  function formatPrice(priceString) {
    const formattedPrice = priceString.replace(/€|[\/a].*/, "").trim();
    return parseFloat(formattedPrice);
  }

  const Empty = () => {
    dispatch(Clean());
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (type === "subscription") {
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            email: userData.email,
            name: userData.name,
            address: {
              line1: userData.address,
              postal_code: userData.zip_code,
            },
          },
        });

      if (paymentMethodError) {
        setError(paymentMethodError.message);
        setLoading(false);
        return;
      }

      const response = await fetch(
        "https://coffelab-api.onrender.com/payments/create-subscription",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userData.email,
            payment_method_id: paymentMethod.id,
            price_id: content.subscription_id,
          }),
        }
      );

      const subscriptionResult = await response.json();

      if (subscriptionResult.error) {
        setError(subscriptionResult.error);
        setLoading(false);
        return;
      }

      const { client_secret } = subscriptionResult.data;

      const { error: confirmError } = await stripe.confirmCardPayment(
        client_secret
      );

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
      } else {
        setPaymentSucceeded(true);
        setLoading(false);
        if (content.title === "Depois do cafelab, eu me expresso") {
          OrderService.createOrder({
            user_id: userData.name,
            address: userData.address,
            product_id: content.products.map(
              (product) => `${`(${content.style}) ` + product.name}`
            ),
            status: "Subscrição - Eu me expresso",
            zip_code: userData.zip_code,
            amount: formatPrice(content.price),
          });
          setTimeout(() => {
            Empty();
          }, 1000);
        } else {
          OrderService.createOrder({
            user_id: userData.name,
            address: userData.address,
            product_id: [content.style],
            status: "Subscrição - Fé em cafelab",
            zip_code: userData.zip_code,
            amount: formatPrice(content.price),
          });
          setTimeout(() => {
            Empty();
          }, 1000);
        }
      }
    } else {
      const formValues = isLoggedIn ? [] : form.getFieldsValue();
      const requestBody = isLoggedIn
        ? {
            user_id: userData._id.$oid,
            address: userData.address,
            zip_code: userData.zip_code,
            product_id: items.map(
              (product) => `${product.name} x ${product.quantity}`
            ),
            status: "pago",
            amount: total,
            currency: "eur",
          }
        : {
            user_id: formValues.name,
            amount: total,
            currency: "eur",
            address: formValues.address,
            zip_code: formValues.zip_code,
            product_id: items.map(
              (product) => `${product.name} x ${product.quantity}`
            ),
            status: "pago",
          };

      const endpoint = isLoggedIn
        ? "https://coffelab-api.onrender.com/payments/create-payment"
        : "https://coffelab-api.onrender.com/payments/create-payment-no-account";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
      const { cliente_secret } = data.data;

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        cliente_secret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: isLoggedIn ? userData.name : formValues.name,
            },
          },
        }
      );

      if (error) {
        setError(error.message);
        setLoading(false);
      } else if (paymentIntent.status === "succeeded") {
        setPaymentSucceeded(true);
        setLoading(false);
        setTimeout(() => {
          Empty();
        }, 1000);
      }
    }
  };

  return (
    <Flex
      style={{ width: "100%", height: "100vh", padding: "25px" }}
      align="center"
      justify="center"
      vertical
    >
      <Flex
        style={{
          width: "100%",
          maxWidth: "400px",
          maxHeight: "350px",
          overflow: "auto",
          marginBottom: "3rem",
          scrollbarColor: "#718096  #00000000",
        }}
        vertical
      >
        {items?.map((item, index) => (
          <CartItemCheckout key={index} {...item} />
        ))}
        {(total === 0 || type === null) && type !== "subscription" ? (
          <Text
            fontSize={"1.5em"}
            fontWeight={600}
            color={"#718096"}
            mb={"3rem"}
          >
            Nenhum produto selecionado
          </Text>
        ) : null}
        {type === "subscription" && (
          <Text
            fontSize={"1.5em"}
            fontWeight={600}
            color={"#718096"}
            mb={"3rem"}
          >
            Subscrição: {content.title}
          </Text>
        )}
      </Flex>
      <Flex gap={5} vertical style={{ maxWidth: "400px", width: "100%" }}>
        <Flex flex={1}>
          {isLoggedIn ? null : (
            <Form form={form} style={{ width: "100%" }} layout="vertical">
              <Form.Item name="name" label="Nome">
                <Input placeholder="Nome" />
              </Form.Item>
              <Form.Item name="address" label="Morada Completa">
                <Input placeholder="Morada" />
              </Form.Item>
              <Form.Item name="zip_code" label="Código Postal">
                <Input placeholder="0000-000" />
              </Form.Item>
            </Form>
          )}
        </Flex>
        <Flex flex={1}>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            {error && <div>{error}</div>}
            <Button
              gap={"1rem"}
              w={"100%"}
              mt={"2rem"}
              h={"50px"}
              color={"#2D3748"}
              cursor={"pointer"}
              bg={"#CBD5E0"}
              fontSize={"0.9rem"}
              fontFamily={"Roboto, sans-serif"}
              border={"none"}
              _hover={{
                bg: "#fff",
                transition: "0.5s ease in-out",
                border: "1px solid RGBA(0, 0, 0, 0.24)",
              }}
              type="submit"
              disabled={!stripe || loading}
            >
              {loading ? "Processing..." : "Pagar"}
            </Button>
            {paymentSucceeded && (
              <div>
                <Flex align="center" justify="center">
                  <Text color={"green"} fontSize={"1.5rem"}>
                    Pagamento concluido com sucesso
                  </Text>
                </Flex>
              </div>
            )}
          </form>
        </Flex>
      </Flex>
      <Flex align="flex-end" justify="flex-end">
        <Text
          fontSize={"1.5em"}
          fontWeight={600}
          color={"#718096"}
          mt={20}
          textAlign={"center"}
        >
          Total a pagamento:{" "}
          {type === "subscription" ? content.price : total + "€"}
        </Text>
      </Flex>
    </Flex>
  );
}
