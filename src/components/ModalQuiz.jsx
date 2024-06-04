import {
  Box,
  Button,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "./questions.jsx";
import Resultado from "./Resultado.jsx";
import { getUserByEmail } from "../Services/LoginService.tsx";

function ModalQuiz() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const loginSession = localStorage.getItem("@_auth_sessions");
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const sessionData = JSON.parse(atob(loginSession));
      getUserByEmail(sessionData.email)
        .then((response) => {
          if (response.data.is_subscribed) {
            setIsSubscribed(true);
          } else {
            onOpen();
          }
        })
        .catch((error) => {
          console.error("Erro ao obter conta:", error);
        });
    } else {
      onOpen();
    }
  }, [isLoggedIn, loginSession, onOpen]);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [firstSlide, setFirstSlide] = useState(true);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [results, setResults] = useState([]); // New state variable for results

  const { questions } = quizData;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setResults((results) => [...results, selectedAnswerIndex]); // Store the selected answer index
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />

      {firstSlide ? (
        <ModalContent>
          <ModalHeader>
            <Box as="span">Novo por aqui?</Box>
          </ModalHeader>
          <ModalBody>
            <Stack>
              <Box as="span">
                Para te ajudar temos um quiz para descobrir o melhor café para
                você! O que acha?
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Agora não...
            </Button>
            <Button colorScheme="blue" onClick={() => setFirstSlide(false)}>
              Vamos lá!
            </Button>
          </ModalFooter>
        </ModalContent>
      ) : !showResult ? (
        <ModalContent>
          <ModalHeader>
            <Box as="span" className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </Box>
            <Box as="span" className="total-question">
              /{addLeadingZero(questions.length)}
            </Box>
          </ModalHeader>
          <ModalBody>
            <Stack className="quiz-container">
              <Heading as="h2" size="3xl">
                {question}
              </Heading>
              <UnorderedList>
                {choices.map((answer, index) => (
                  <ListItem
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={
                      selectedAnswerIndex === index ? "selected-answer" : null
                    }
                  >
                    {answer}
                  </ListItem>
                ))}
              </UnorderedList>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </ModalFooter>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalHeader>
            <Box as="span" className="active-question-no">
              RESULTADO
            </Box>
          </ModalHeader>
          <ModalBody>
            <Resultado
              exp={results[0]} // Pass the selected answer index
              sabor={results[1]} // Pass the selected answer index
              uso={results[2]} // Pass the selected answer index
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Prefiro escolher...
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Vamos lá!
            </Button>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );
}

export default ModalQuiz;
