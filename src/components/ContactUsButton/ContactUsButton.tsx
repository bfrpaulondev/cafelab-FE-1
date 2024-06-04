import React from "react";
import { Button, Box, Link, HStack, Text } from "@chakra-ui/react";

const ContactUsButton = () => (
  <HStack spacing={10} border={"none"}>
    <Box as="a" href="https://www.facebook.com/cafelablisbon" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#718096"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    </Box>
    <Box as="a" href="https://www.instagram.com/cafelabpt/" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#718096"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M16.5 7.5l0 .01" />
      </svg>
    </Box>
    <Box
      as="a"
      href="https://www.youtube.com/channel/UCQl_vcXvPTqBoX_cTEWklFg"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="35"
        height="35"
      >
        <path
          fill="#718096"
          d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
        />
      </svg>
    </Box>
  </HStack>
);

export default ContactUsButton;
