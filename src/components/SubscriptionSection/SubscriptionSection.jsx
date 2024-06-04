import { Box, Button, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./cafelab_subscricao_1080x.jpg";
import img2 from "./meexpresso_900x.jpg";

export default function SubscriptionSection({ userData }) {
  const navigate = useNavigate();
  const isSubscribed = userData?.is_subscribed;
  const info1 = {
    title: "Depois do cafelab, eu me expresso",
    text: "Para os nossos clientes decididos, ou menos aventureiros. Escolha e monte sua própria subscrição com os cafés que já ama. Selecione três dos nossos cafés especiais e receba todos os meses na sua casa, o melhor do CAFELAB.",
    text2:
      "3 embalagens de 175g em grãos ou moídos de acordo com a sua indicação de consumo. Indique no campo de informações adicionais os cafés escolhidos.",
    text3: "Indique no campo de informações adicionais os cafés escolhidos.",
    description:
      "Subscreva até o dia 25 do mês, para receber os grãos torrados no último forno à lenha de Portugal.",
    img: img2,
  };
  const info2 = {
    title: "Fé no cafelab",
    text: "Para os que nos conhecem, e amam uma surpresa. Quem já pediu, sabe que uma indicação do nosso especialista nunca falha! Receba na sua casa uma coleção de três cafés especiais, escolhidos a dedo todos os meses pelo nosso especialista. E ainda tenha acesso aos nossos cafés exclusivos da assinatura.",
    text2:
      "3 embalagens de 175g em grãos ou moído de acordo com a sua indicação de consumo.",
    description:
      "Subscreva até o dia 25 do mês, para receber os grãos torrados no último forno à lenha de Portugal.",
    img: img1,
  };
  return (
    <Flex
      direction={["column", "column", "row"]}
      mt="7rem"
      mb="5rem"
      width="80%"
      minWidth="300px"
      mx="auto"
      justify="center"
      gap={[10, 10, 100]}
    >
      <Flex
        direction="column"
        flex={1}
        justify="center"
        align="center"
        gap={4}
        m={[4, 4, "4rem"]}
      >
        <Image
          src={img2}
          width={["100%", "300px"]}
          height="auto"
          objectFit="cover"
        />
        <Flex direction="column" align="center">
          <Text as="h3" textAlign="center" fontSize="1.5rem" fontWeight="bold">
            Depois do cafelab, eu me expresso
          </Text>
          <Text fontSize="1.2rem">25€</Text>
          <Button
            mt={4}
            width="200px"
            height="50px"
            color="#2D3748"
            bg="white"
            fontFamily="Roboto, sans-serif"
            border="solid"
            onClick={() => {
              if (!isSubscribed) {
                navigate("/subscricao-info", { state: info1 });
              }
            }}
          >
            <Text fontSize="1.1rem">
              {isSubscribed ? "Já está subcrito!" : "Subscrever Agora"}
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        flex={1}
        justify="center"
        align="center"
        gap={4}
        m={[4, 4, "4rem"]}
      >
        <Image
          src={img1}
          width={["100%", "300px"]}
          height="auto"
          objectFit="cover"
        />
        <Flex direction="column" align="center">
          <Text as="h3" textAlign="center" fontSize="1.5rem" fontWeight="bold">
            Fé no cafelab
          </Text>
          <Text fontSize="1.2rem">27,90€</Text>
          <Button
            mt={4}
            width="200px"
            height="50px"
            color="#2D3748"
            bg="white"
            fontFamily="Roboto, sans-serif"
            border="solid"
            onClick={() => {
              if (!isSubscribed) {
                navigate("/subscricao-info", { state: info2 });
              }
            }}
          >
            <Text fontSize="1.1rem">
              {isSubscribed ? "Já está subcrito!" : "Subscrever Agora"}
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
