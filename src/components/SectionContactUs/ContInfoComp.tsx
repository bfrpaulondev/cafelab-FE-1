import React from "react";
import { Text, Link } from "@chakra-ui/react";

const ContInfoComp = ({ type, title, info }) => {
  return (
    <>
      <Text
        mt={15}
        fontSize={"1.3rem"}
        color={"#718096"}
        fontFamily={"Roboto, sans-serif"}
        textAlign={"left"}
      >
        {title}
      </Text>
      {type === "href" ? (
        <Link
          fontSize={"1.1rem"}
          color={"#718096"}
          fontFamily={"Roboto, sans-serif"}
          href={info}
          target="_blank"
          wordBreak={"break-all"}
          textAlign={"left"}
        >
          {info}
        </Link>
      ) : (
        type === "normal" && (
          <Text
            fontSize={"1.1rem"}
            color={"#718096"}
            fontFamily={"Roboto, sans-serif"}
            textAlign={"left"}
          >
            {info}
          </Text>
        )
      )}
    </>
  );
};

export default ContInfoComp;
