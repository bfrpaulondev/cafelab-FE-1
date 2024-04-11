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
    useDisclosure
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {quizData} from "./questions.jsx";

function ModalQuiz() {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const navigate = useNavigate();

    useEffect(() => {
        onOpen();
    }, [onOpen]);

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [results, setResults] = useState([]) // New state variable for results


    const {questions} = quizData
    const {question, choices, correctAnswer} = questions[activeQuestion]

    const onClickNext = () => {
        setResults(results => [...results, {
            question: question,
            selectedAnswer: selectedAnswer
        }]);
        setSelectedAnswerIndex(null)
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        setSelectedAnswer(answer)
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)


    return (
        <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />

            { !showResult ? (
                <ModalContent>
                    <ModalHeader>
                        <Box as='span' className="active-question-no">{addLeadingZero(activeQuestion + 1)}</Box>
                        <Box as='span' className="total-question">/{addLeadingZero(questions.length)}</Box>
                    </ModalHeader>
                    <ModalBody>
                        <Stack className="quiz-container">
                            <Heading as='h2' size='3xl'>{question}</Heading>
                            <UnorderedList>
                                {choices.map((answer, index) => (
                                    <ListItem
                                        onClick={() => onAnswerSelected(answer, index)}
                                        key={answer}
                                        className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                                        {answer}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            ) : (
                <ModalContent>
                    <ModalHeader>
                        <Box as='span' className="active-question-no">RESULTADO</Box>
                    </ModalHeader>
                    <ModalBody>
                        <Stack className="result">
                            <p>
                                Total Question: <span>{questions.length}</span>
                            </p>
                            <div>
                                {results.map((result, index) => (
                                    <Stack key={index}>
                                        <p>Question: {result.question}</p>
                                        <p>Selected Answer: {result.selectedAnswer}</p>
                                    </Stack>
                                ))}
                            </div>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button  mr={3} onClick={onClose}>
                            Não sei... vou ver as opções
                        </Button>
                        <Button colorScheme='blue' onClick={() => navigate('/checkout')}>
                            Ao carrinho!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            )
            }
        </Modal>
    )
}

export default ModalQuiz

/* TODO redirect to checkout with cart filled with selected items */