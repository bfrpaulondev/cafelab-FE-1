import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import { message } from "antd";
import "./ContactForm.css";
import ServiceForm from "../../Services/ServiceForm";
import { isMobile } from "react-device-detect";
function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await ServiceForm.post(formData);
      console.log("Form Data:", formData);
      message.success("Enviada com sucesso aguarde uma resposta !");
      // Limpar o formulário após o envio
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Erro ao enviar !");
    }
  };
  return (
    <Box py={50}>
      <form onSubmit={handleSubmit}>
        <HStack align={"center"} justify={"space-between"} flexWrap={"wrap"}>
          <FormControl className="FormControl">
            <Input
              id="first_name"
              name="first_name"
              type="text"
              className="field"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="FormControl">
            <Input
              id="last_name"
              name="last_name"
              className="field"
              type="text"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl className="FormControl">
            <Input
              id="email"
              name="email"
              className="field"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="FormControl">
            <Input
              id="phone"
              name="phone"
              className="field"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>

        <FormControl>
          <Textarea
            id="description"
            className="field"
            name="description"
            h={220}
            placeholder="Write your message here"
            value={formData.description}
            onChange={handleChange}
            fontSize={15}
            fontFamily={"Roboto, sans-serif"}
            p={10}
          />
        </FormControl>
        <Button type="submit" className="btn-send">
          SEND
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
