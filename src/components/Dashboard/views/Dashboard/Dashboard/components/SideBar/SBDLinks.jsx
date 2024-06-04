import { Flex, useColorModeValue } from "@chakra-ui/react";
import IconBox from "../../../../../components/Icons/IconBox";
import PropTypes from "prop-types";

const SBEnable = ({ icon, name }) => {
  const icongray = useColorModeValue("gray.300", "gray.300");

  return (
    <Flex
      w="300px"
      alignItems="center"
      h={55}
      mb={15}
      pl={3}
      bg="white"
      borderRadius={10}
    >
      <IconBox
        as="box"
        h={"30px"}
        w={"30px"}
        bg={icongray}
        me={11}
        color="white"
      >
        {icon}
      </IconBox>
      <Flex
        alignItems="center"
        fontWeight="bold"
        fontSize={13}
        color="gray.700"
      >
        {name}
      </Flex>
    </Flex>
  );
};

const SBDisable = ({ icon, name }) => {
  const icongray = useColorModeValue("gray.300", "gray.300");

  return (
    <Flex w="full" alignItems="center" h={55} mb={15} pl={3} borderRadius={10}>
      <IconBox
        as="box"
        h={"30px"}
        w={"30px"}
        bg="white"
        me={11}
        color={icongray}
      >
        {icon}
      </IconBox>
      <Flex fontWeight="bold" fontSize={13} color="gray.400">
        {name}
      </Flex>
    </Flex>
  );
};

SBEnable.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.any,
};

SBDisable.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.any,
};

export { SBEnable, SBDisable };
