import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Spinner, Box, Center, Flex, Button } from '@chakra-ui/react';
import axios from 'axios';

interface NewsletterEmail {
  id: string;
  email: string;
}

interface ContatoFormProps {
  emailInicial?: string;
}

const ContatoForm: React.FC<ContatoFormProps> = ({ emailInicial }) => {
  const [email, setEmail] = useState(emailInicial || '');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envie a mensagem usando a lógica de envio de e-mail que discutimos anteriormente
      console.log('Enviar e-mail:', email, mensagem);
      setEnviado(true);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div>
      {enviado ? (
        <p>Mensagem enviada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Seu Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            rows="4"
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

const NewsletterTable: React.FC = () => {
  const [emails, setEmails] = useState<NewsletterEmail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [emailSelecionado, setEmailSelecionado] = useState<string | null>(null);

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

  const handleContatoClick = (email: string) => {
    setEmailSelecionado(email);
  };

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
        <Table variant="striped" colorScheme="teal">
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
                  <Button onClick={() => handleContatoClick(email.email)}>Contato</Button> {/* Botão para abrir o formulário de contato */}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Renderizar o formulário de contato com o e-mail selecionado */}
      {emailSelecionado && <ContatoForm emailInicial={emailSelecionado} />}
    </Flex>
  );
};

export default NewsletterTable;
