import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Spinner, Box, Center, Flex, Button } from '@chakra-ui/react';
import axios from 'axios';

interface NewsletterEmail {
  id: string;
  email: string;
}


const NewsletterTable: React.FC = () => {
  const [emails, setEmails] = useState<NewsletterEmail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchEmails = async () => {
      try {
        const response = await axios.get('https://coffelab-api.onrender.com/newsletter/all');
        setEmails(response.data.data); // Acessar a propriedade 'data' da resposta
      } catch (err) {
        setError('Erro ao carregar emails. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
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
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Id User</Th>
              <Th>Email</Th>
              <Th>Ação</Th> {/* Adicionando uma coluna para a ação */}
            </Tr>
          </Thead>
          <Tbody>
            {emails.map((email) => (
              <Tr key={email._id.$oid}>
                <Td>{email._id.$oid}</Td>
                <Td>{email.email}</Td>
                <Td>
                  <Button>Contato</Button> {/* Botão para abrir o formulário de contato */}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default NewsletterTable;
