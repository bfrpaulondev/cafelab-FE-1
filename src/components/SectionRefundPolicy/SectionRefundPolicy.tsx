import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";

export default function SectionRefundPolicy() {
  return (
    <Box mt={"110px"} mb={"50px"} display={"flex"} flexDirection={"column"} gap={"1rem"} mx={"auto"} w={isMobile ? "90vw" : "60vw"} justifyContent={"flex-start"} alignItems={"flex-start"}>
      <Text as={"p"} fontSize={"1.9rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} alignSelf={"center"}>Política de reembolso</Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Temos uma política de devolução de 30 dias, o que significa que você tem 30 dias após o recebimento do item para solicitar a devolução.
      </Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Para ter direito a uma devolução, seu item deve estar nas mesmas condições em que você o recebeu, sem usar ou sem usar, com etiquetas e em sua embalagem original. Você também precisará do recibo ou comprovante de compra.
      </Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Danos e problemas <br />
        Por favor, inspecione seu pedido no momento do recebimento e entre em
        contato conosco imediatamente se o item estiver com defeito, danificado
        ou se você receber o item errado, para que possamos avaliar o problema e
        corrigi-lo.
      </Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Exceções / itens não retornáveis <br />
        Certos tipos de itens não podem ser devolvidos, como produtos perecíveis
        (como alimentos, flores ou plantas), produtos personalizados (como
        pedidos especiais ou itens personalizados) e produtos de higiene pessoal
        (como produtos de beleza). Também não aceitamos devoluções de materiais
        perigosos, líquidos inflamáveis ​​ou gases. Por favor, entre em contato
        se você tiver dúvidas ou preocupações sobre seu item específico.
      </Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Você sempre pode nos contatar para qualquer pergunta de retorno em cafelabpt@gmail.com. Infelizmente, não podemos aceitar devoluções de itens em promoção ou cartões-presente.
      </Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Intercâmbios <br />
        A maneira mais rápida de garantir que você obtenha o que deseja é devolvendo o item que você possui e, assim que a devolução for aceita, faça uma compra separada para o novo item.
      </Text>
      <Text as={"p"} fontSize={"1.1rem"} color={"#718096"} fontFamily={"Roboto, sans-serif"} textAlign={"justify"}>
        Reembolsos <br />
        Notificaremos você assim que recebermos e inspecionarmos sua devolução e
        informaremos se o reembolso foi aprovado ou não. Se aprovado, você será
        reembolsado automaticamente em sua forma de pagamento original.
        Lembre-se de que pode levar algum tempo para que seu banco ou
        administradora de cartão de crédito processe e publique o reembolso.
      </Text>
    </Box>
  );
}
