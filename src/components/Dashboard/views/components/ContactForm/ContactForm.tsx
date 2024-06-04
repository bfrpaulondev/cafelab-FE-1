import React, { useState } from 'react';
import axios from 'axios';

const ContatoForm = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [assunto, setAssunto] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar a mensagem para o Mailtrap
      await axios.post('https://trial-neqvygmeked40p7w.mlsender.net/api/v1/messages', {
        to: email, // Substitua pelo seu e-mail
        from: "cafelab@gmail.com",
        subject: assunto,
        text: mensagem,
      }, {
        headers: {
          'Authorization': 'Bearer mlsn.64c588f8244494e41d30bfe16c3ea652389961086c9ddc3a19b19a91c13d9d64',
          'Content-Type': 'application/json',
        }
      });

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

          <label htmlFor="assunto">Assunto:</label>
          <input
            type="text"
            id="assunto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
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

export default ContatoForm;
