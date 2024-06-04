import { Flex, Box, Image } from "@chakra-ui/react";
import {
  SBEnable,
  SBDisable,
} from "../../views/Dashboard/Dashboard/components/SideBar/SBDLinks";
import dashRoutes from "../../navroutes";
import { Separator } from "../Separator/Separator";
import { NavLink, useLocation, Link } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <Flex
      as="aside"
      w="full"
      h="full"
      maxW={315}
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="3xl"
    >
      <Flex w="full" alignItems="center" flexDirection="column">
        <Link to="/admin-dashboard" target="_blank">
          <Flex mb={5}>
            <Box boxSize="30px" mr={3}>
              <Image src="/icon-192x192.png" />
            </Box>
            <Flex
              alignItems="center"
              fontSize={15}
              fontWeight="bold"
              color="gray.700"
            >
              Cafelab
            </Flex>
          </Flex>
        </Link>
        <Separator />

        {dashRoutes.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink key={index} to={item.path} style={{ width: "100%" }}>
              {isActive ? (
                <SBEnable name={item.name} icon={item.icon} />
              ) : (
                <SBDisable name={item.name} icon={item.icon} />
              )}
            </NavLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AdminNavbar;
