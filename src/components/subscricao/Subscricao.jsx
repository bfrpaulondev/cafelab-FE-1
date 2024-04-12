import SidebarWithHeader from "../shared/SideBar.jsx";
import {Box, Button, Card, CardBody, CardHeader, CardFooter, Flex, Heading, IconButton, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {FaHandshake} from "react-icons/all.js";

const Subscricao = () => {

    const fontSize = useBreakpointValue({base: "6xl", md: "62px"});
    const stackSpacing = useBreakpointValue({base: "20px", md: "40px"});
    const sectWidth = useBreakpointValue({base: "100%", md: "50%"});

    return (
        <SidebarWithHeader>
            <Stack justify="flex-start" align="center" mt={6} spacing="24px">
                <Text className="font-oliveAntique" align="center" fontWeight="extrabold" fontSize={fontSize} letterSpacing="-0.08em" color="#000000">
                    Subscrição CAFELAB
                </Text>
            </Stack>
            <Stack direction={["column", 'row']} m={10} spacing="4" align="center" justify="space-between">
                <Stack spacing={stackSpacing} width={sectWidth}>
                    <Card height="100%">
                        <CardHeader align={"center"}>
                            <Stack justify="flex-start" align="center" fontSize={"3xl"} spacing="0px">
                                <Text className="font-oliveAntique" fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                    FÉ NO CAFELAB
                                </Text>
                                <Text fontFamily="Roboto" fontWeight="regular" letterSpacing="tighter" color="#FFFFFF"
                                      textAlign="center" mx={4}>
                                    <Box as="span" color="#000000">
                                        SELEÇÃO DA CASA
                                    </Box>
                                </Text>
                            </Stack>
                        </CardHeader>
                        <CardBody m={4}>
                            <Text>
                                Para os que nos conhecem, e amam uma surpresa.
                                <br/>
                                Quem já pediu, sabe que uma indicação do nosso especialista nunca falha !
                                Receba na sua casa uma coleção de 3 cafés especiais, escolhidos a dedo todos os meses pelo nosso especialista.
                                <br/>
                                3 embalagens de 200g, em grãos ou moídas de acordo com a sua indicação de consumo.

                            </Text>
                        </CardBody>
                        <Image
                            objectFit='cover'
                            src='assets/bundle.png'
                            alt='Chakra UI'
                            m={6}
                        />

                        <CardFooter alignSelf="center">
                            <Flex justifyContent="center" alignItems="center">
                                <Button leftIcon={<FaHandshake/>} onClick={() => navigate('/cart')} size='lg' height='48px' width='200px' border='2px'
                                        variant='outline' colorScheme='#FEEBC8'>
                                    Confio
                                </Button>
                            </Flex>
                        </CardFooter>
                    </Card>
                </Stack>

                <Stack spacing={stackSpacing} width={sectWidth}>
                    <Card height="100%">
                        <CardHeader align={"center"}>
                            <Stack justify="flex-start" align="center" fontSize={"3xl"} spacing="0px">
                                <Text className="font-oliveAntique" fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                    Depois do Cafelab,
                                    <br/>eu me expresso
                                </Text>
                            </Stack>
                        </CardHeader>
                        <CardBody m={4}>
                            <Text>
                                Para os nossos clientes decididos, ou menos aventureiros.
                                <br/>
                                Faça a sua escolha e monte a sua própria subscrição com os cafés que já ama.  Escolha e monte a sua coleção de 3 dos nossos cafés especiais e receba todos os meses na sua casa, o melhor do Cafelab.
                                <br/>
                                3 embalagens de 200g em grãos ou moídas de acordo com a sua indicação de consumo.
                            </Text>
                        </CardBody>
                        <Image
                            objectFit='cover'
                            src='assets/bundle.png'
                            alt='Chakra UI'
                            m={6}
                        />

                        <CardFooter alignSelf="center">
                            <Stack alignSelf="center" justifyContent="center">
                                <Button leftIcon={<FaHandshake/>} onClick={() => navigate('/agenda')} size='lg' height='48px' border='2px'
                                        variant='outline' colorScheme='#FEEBC8'>
                                    Já sei o meu cafelab
                                </Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Stack>

            </Stack>
        </SidebarWithHeader>
    );
}

export default Subscricao;
