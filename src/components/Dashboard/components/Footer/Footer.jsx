import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  // const linkgray = useColorModeValue("gray.400", "red.200");=
  return (
    <Flex>
      <Text color="gray.400" mb={{ base: "20px", xl: "0px" }} ml={20}>
        <Text as="span">Made by </Text>
        <Link
          // color={linkgray}
          color="gray.400"
          href="https://www.creative-tim.com"
          target="_blank"
        >
          Young Dev
        </Link>
      </Text>
    </Flex>
  );
}
