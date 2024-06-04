import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "../components/Dashboard/views/Dashboard/Dashboard";
import Purchases from "../components/Dashboard/views/Dashboard/Billing";
import Users from "../components/Dashboard/views/Dashboard/Tables";
import AdminNavbar from "../components/Dashboard/components/Navbar/AdminNavbar";
import NotFound from "./NotFound";
import {
  HStack,
  Flex,
  Box,
  Button,
  Text,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ExitIcon } from "../components/Dashboard/components/Icons/Icons";
import Footer from "../components/Dashboard/components/Footer/Footer";
import NewsletterTable from "../components/Dashboard/views/components/NewsletterTable/NewsletterTable";
import ContactTable from "../components/Dashboard/views/components/ContactTable/ContactTable";
import EventsTable from "../components/Dashboard/views/components/EventsTable/EventsTable";
import Products from "./Products";

const AltDash = () => {
  const isDrawer = useBreakpointValue({ base: true, xl: false });
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack w="full" h="100vh" bg="gray.50" padding={10}>
        {isDrawer ? (
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent p={50}>
                <DrawerCloseButton />
                <AdminNavbar />
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        ) : (
          <AdminNavbar />
        )}
        <Flex flexDirection="column" alignSelf="flex-start" ml={5} w="full">
          <Box alignSelf="flex-end">
            <NavLink to="/admin-auth">
              <Button color={navbarIcon} variant="transparent-with-icon">
                <ExitIcon color={navbarIcon} w="22px" h="22px" mr={3} />
                <Text display={{ sm: "none", md: "flex" }}>Sair</Text>
              </Button>
            </NavLink>
            <IconButton
              icon={
                <HamburgerIcon color={navbarIcon} w="22px" h="22px" mr={3} />
              }
              onClick={onOpen}
              display={{ xl: "none" }}
              variant="transparent-with-icon"
            />
          </Box>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newsletter" element={<NewsletterTable />} />
            <Route path="/contacts" element={<ContactTable />} />
            <Route path="/eventos" element={<EventsTable />} />
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Flex>
      </HStack>
      <Footer />
    </>
  );
};

export default AltDash;
