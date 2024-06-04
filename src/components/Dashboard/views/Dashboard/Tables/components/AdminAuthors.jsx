// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";
import AdminTablesTableRow from "../../../../components/Users/AdminTablesTableRow";
import PropTypes from "prop-types";

const AdminAuthors = ({ title, captions, data, refreshData }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card
      overflowX={{ sm: "scroll", xl: "hidden" }}
      mt={30}
      bg="white"
      borderRadius={15}
    >
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <AdminTablesTableRow
                  key={row._id.$oid}
                  id={row._id.$oid}
                  name={row.name}
                  email={row.email}
                  refreshData={refreshData}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

AdminAuthors.propTypes = {
  title: PropTypes.string.isRequired,
  captions: PropTypes.array.isRequired,
  data: PropTypes.any.isRequired,
  refreshData: PropTypes.func.isRequired,
};

export default AdminAuthors;
