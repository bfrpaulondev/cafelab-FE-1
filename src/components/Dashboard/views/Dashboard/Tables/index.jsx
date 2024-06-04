// Chakra imports
import {
  Flex,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
  Tab,
  Center,
  Spinner,
  Box,
} from "@chakra-ui/react";
import Authors from "./components/Authors";
import AdminAuthors from "./components/AdminAuthors";
import { getAllUsers } from "../../../../../Services/LoginService";
import { useEffect, useState } from "react";
import AdminServiceDashboard from "../../../../../Services/components/AdminServiceDashboard/AdminServiceDashboard";

function Tables() {
  const [users, SetUsers] = useState([]);
  const [admins, SetAdmins] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  const RetrieveUsers = async () => {
    try {
      const data = await getAllUsers();
      const admindata = await AdminServiceDashboard.getAllAdmins();
      SetUsers(data.data);
      SetAdmins(admindata.data);
    } catch (err) {
      SetError("Erro ao carregar os dados. Tente mais tarde.");
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    RetrieveUsers();
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center height="100vh">
        <Box color="red.500">{error}</Box>
      </Center>
    );
  }

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} w="full">
      <Tabs>
        <TabList>
          <Tab>Utilizadores</Tab>
          <Tab>Administradores</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Authors
              title={"Utilizadores"}
              captions={["Utilizador", "Subscrito", "Criado a", ""]}
              data={users}
              refreshData={RetrieveUsers} // Pass the function to refresh data
            />
          </TabPanel>
          <TabPanel>
            <AdminAuthors
              title={"Administradores"}
              captions={["Administrador", ""]}
              data={admins}
              refreshData={RetrieveUsers}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default Tables;
