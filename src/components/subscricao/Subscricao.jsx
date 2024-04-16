import SidebarWithHeader from "../shared/SideBar.jsx";
import {Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {FaHandshake} from "react-icons/fa";

const Subscricao = () => {

    const fontSize = useBreakpointValue({base: "5xl", md: "62px"});
    const stackSpacing = useBreakpointValue({base: "20px", md: "40px"});
    const sectWidth = useBreakpointValue({base: "100%", md: "50%"});

    return (
        <SidebarWithHeader>
            <Stack backgroundColor={"#81938c"} p={10}>
                <Stack justify="flex-start" align="center" my={6} mx={4} spacing="24px">
                    <Text className="font-oliveAntique" align="center" fontWeight="extrabold" fontSize={fontSize} letterSpacing="-0.08em" color="#000000">
                        SUBSCRIÇÃO CAFELAB
                    </Text>
                </Stack>
                <Stack direction={["column", 'row']} spacing="6" align="center" justify="space-between">
                    <Stack spacing={stackSpacing} width={sectWidth}>
                        <Card height="100%"
                              backgroundColor={"#FFFFFF"}>
                            <CardHeader align={"center"}>
                                <Box my={8}>
                                </Box>
                                <Stack justify="flex-start" align="center" fontSize={"3xl"} spacing="0px">
                                    <Text className="font-oliveAntique" textAlign={"center"} fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                        Fé no Cafelab
                                    </Text>
                                </Stack>
                            </CardHeader>
                            <CardBody mx={4}>
                                <Box my={5}>
                                </Box>
                                <Text align="center">
                                    Para os que nos conhecem, e amam uma surpresa.
                                    <br/>
                                    Quem já pediu, sabe que uma indicação do nosso especialista nunca falha !
                                    Receba na sua casa uma coleção de 3 cafés especiais, escolhidos a dedo todos os meses pelo nosso especialista.
                                    <br/>

                                </Text>
                                <Text align="center" fontSize={"xs"} mt={6}>
                                    3 embalagens de 200g em grãos ou moídas<br/> de acordo com a sua indicação de consumo.

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

                    <Stack width={sectWidth}>
                        <Card height="100%"
                              backgroundColor={"#FFFFFF"}>
                            <CardHeader align={"center"}>
                                <Stack justify="flex-start" align="center" fontSize={"3xl"} spacing="0px">
                                    <Text className="font-oliveAntique" fontWeight="extrabold" letterSpacing="-0.08em" color="#000000">
                                        Depois do Cafelab,
                                        <br/>eu me expresso
                                    </Text>
                                </Stack>
                            </CardHeader>
                            <CardBody mx={8}>
                                <Text align="center">
                                    Para os nossos clientes decididos, ou menos aventureiros.
                                    <br/>
                                    Faça a sua escolha e monte a sua própria subscrição com os cafés que já ama.
                                    <br/>
                                    Escolha e monte a sua coleção de 3 dos nossos
                                    cafés especiais e receba todos os meses na sua casa, o melhor do Cafelab.
                                    <br/>
                                </Text>
                                <Text align="center" fontSize={"xs"} mt={6}>
                                    3 embalagens de 200g em grãos ou moídas<br/> de acordo com a sua indicação de consumo.
                                </Text>
                            </CardBody>
                            <Image
                                alignSelf="center"
                                objectFit='cover'
                                src='assets/bundle.png'
                                alt='Chakra UI'
                                m={6}
                                boxSize={"80%"}
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


            </Stack>
        </SidebarWithHeader>
    );
}

export default Subscricao;
