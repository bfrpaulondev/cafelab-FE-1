import SidebarWithHeader from "./components/shared/SideBar.jsx";
import {Box, Button, Flex, Grid, GridItem, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {FiBook, FiCalendar, FiPackage, FiShoppingBag} from "react-icons/fi";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const stackSpacing = useBreakpointValue({base: "20px", md: "40px"});
    const boxPadding = useBreakpointValue({base: "5px", md: "10px"});
    const fontSize = useBreakpointValue({base: "6xl", md: "82px"});
    const fontHl = useBreakpointValue({base: "6xl", md: "102px"});
    const fontHl2 = useBreakpointValue({base: "xl", md: "3xl"});
    const fontHl3 = useBreakpointValue({base: "lg", md: "2xl"});
    const sectionHeight = useBreakpointValue({base: "720px", md: "700px"});
    const sectionPadding = useBreakpointValue({base: "150px", md: "200px"});
    const displayValue = useBreakpointValue({base: "none", md: "grid"});
    const gridValue = useBreakpointValue({base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"});

    const navigate = useNavigate();

    return (

        <SidebarWithHeader>
            <Stack>
                <Stack paddingY="60px" align="center" maxWidth="100%" backgroundImage="url('assets/phimg.jpg')" spacing="40px">
                    <Stack justify="flex-start" align="center" spacing={stackSpacing} width="759px" maxWidth="100%">
                        <Stack justify="flex-start" align="center" spacing="24px">
                            <Text className="font-oliveAntique" fontWeight="extrabold" fontSize={fontSize} letterSpacing="-0.08em" color="#FFFFFF">
                                CAFELAB
                            </Text>
                            <Text fontFamily="Roboto" fontWeight="regular" fontSize={fontHl2} letterSpacing="tighter" color="#FFFFFF"
                                  textAlign="center" mx={4}>
                                <Box as="span" color="#FFFFFF" mt={10}>
                                    Uma nova loja! O seu novo café!
                                </Box>
                            </Text>
                            <Text fontFamily="Roboto" lineHeight="1.48" fontWeight="regular" fontSize={fontHl3} letterSpacing="-0.02em" color="#FFFFFF"
                                  alignSelf="stretch" textAlign="center" ml={4}>
                                <Box as="span" color="#FFFFFF" mb={10}>
                                    A primeira loja de café de especialidade de Oeiras.
                                </Box>
                            </Text>
                        </Stack>
                        <Stack alignSelf="stretch" direction={['column', 'row']} justify="center" align="center" spacing="12px">
                            <Button leftIcon={<FiPackage/>} onClick={() => navigate('/subscricao')} >SUBSCRIÇÃO</Button>
                            <Button leftIcon={<FiShoppingBag/>} onClick={() => navigate('/boutique')}>
                                BOUTIQUE
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <Box>
                    <Text className="font-oliveAntique text-center mb-5 mt-5" fontSize={"4xl"}>CAFELAB</Text>
                </Box>

                <Stack className={"mainPanels"} mx={4} height={sectionHeight} align="center" backgroundSize={"cover"}
                    /*backgroundColor="cornsilk"*/ backgroundImage="url('assets/terrace2.jpeg')" spacing={stackSpacing}>
                    <Stack spacing={stackSpacing} justify="flex-start" width="759px" maxWidth="100%" mt={4}>
                        <Flex direction="column" justify="space-between" align="center" height="100%">
                            <Stack justify="center" align="center" spacing={stackSpacing}>
                                <Box backgroundColor="rgba(245, 245, 240,0.5)" align="center" padding={boxPadding}>
                                    <Text className={"cafelab"} fontWeight="extrabold" fontSize={fontSize} letterSpacing="-0.08em" color="#000000">
                                        Visite nosso espaço
                                    </Text>
                                </Box>
                            </Stack>
                            <Stack justify="center" align="center" spacing={stackSpacing} my={4} width="60%" height="50%">
                                <Image src="assets/untitled.png" alt="terrace"/>
                                // TODO: Add googlemaps link
                                <Box backgroundColor="rgba(0, 0, 0,0.7)" padding={boxPadding}>
                                    <Text className={"cafelab"} fontSize={"3xl"} align="center" letterSpacing="-0.08em" color="#FFFFFF" mx={2}>
                                        Av. Moçambique 14 A, 2780-027 Oeiras
                                    </Text>
                                </Box>
                            </Stack>
                            <Stack direction={['column', 'row']} justify="center" align="center" spacing={stackSpacing} mt={"30px"} mx={4}>
                                <Box backgroundColor="rgba(0, 0, 0,0.7)" mx={2} padding={boxPadding} align="center">
                                    <Text className={"cafelab"} fontSize={"3xl"} letterSpacing="-0.004em" color="#FFFFFF" mx={2}>
                                        Pet & Work Friendly
                                    </Text>
                                </Box>
                                <Box backgroundColor="rgba(0, 0, 0,0.7)" mx={6} padding={boxPadding} align="center">
                                    <Text className={"cafelab"} fontSize={"3xl"} letterSpacing="-0.004em" color="#FFFFFF" mx={2}>
                                        LGBTQ+ Friendly
                                    </Text>
                                </Box>
                            </Stack>
                        </Flex>
                    </Stack>
                </Stack>
                <Box/>
                <Stack className={"mainPanels"} m={"20px"} height={sectionHeight} align='stretch' maxWidth="100%" backgroundSize={"cover"}
                       backgroundColor="cornsilk" spacing={stackSpacing}>
                    <Grid
                        m={4}
                        height={sectionHeight}
                        templateColumns={gridValue}
                    >
                        <GridItem rowSpan={1}>
                            <Stack justify="flex-end" maxWidth="100%" mt={4}>
                                <Text className="font-oliveAntique text-center" fontSize={fontHl2}>CALENDARIO CULTURAL</Text>
                                <Text className="font-oliveAntique text-center mb-5" fontSize={fontHl}>CAFELAB</Text>
                            </Stack>
                            <Stack justify="flex-end" maxWidth="100%" mt={sectionPadding}>
                                <Text className="font-oliveAntique text-center" fontSize={"xl"}>Descubra nossos projetos e eventos</Text>
                            </Stack>
                            <Stack mt={8} align={'center'}>
                                <Button leftIcon={<FiCalendar/>} onClick={() => navigate('/agenda')} size='lg' height='48px' width='200px' border='2px' variant='outline' colorScheme='#FEEBC8'>
                                    Agenda
                                </Button>
                            </Stack>
                        </GridItem>
                        <GridItem rowSpan={1} display={displayValue}>
                            <Stack borderRadius={20} mx={3} my={2} height={"650px"} align="center" maxWidth="100%" backgroundSize={"cover"} className={"fill"}
                                   spacing="40px">
                                <Box width="100%" height="100%">
                                    <Image src="assets/terrace2.jpeg" alt="terrace" objectFit="fill" width="100%" height="100%"/>
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Stack>
                <Box/>
                <Stack className={"mainPanels"} m={4} height={sectionHeight} maxWidth="100%" backgroundSize={"cover"}
                       backgroundColor="cornsilk" spacing={stackSpacing}>
                    <Grid m={4} height={sectionHeight} templateColumns={gridValue}>
                        <GridItem display={displayValue}>
                            <div className="sticker">
                                NOVO!
                            </div>
                            <Stack borderRadius={20} mx={3} my={2} height={"650px"} align="center" maxWidth="100%" backgroundSize={"cover"} className={"fill"}
                                   spacing="40px">
                                <Box width="100%" height="100%">
                                    <Image src="assets/summerdinrk.jpeg" alt="terrace" objectFit="fill" width="100%" height="100%"/>
                                </Box>
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack justify="flex-end" maxWidth="100%" mt={4}>
                                <Text className="font-oliveAntique text-center" fontSize={stackSpacing}>MENU DE VERÃO</Text>
                                <Text className="font-oliveAntique text-center mb-5" fontSize={fontSize}>CAFELAB</Text>
                            </Stack>
                            <Stack justify="flex-end" maxWidth="100%" mt={sectionPadding}>
                                <Text className="font-oliveAntique text-center" fontSize={"xl"}>Drinks refrescantes para o verão</Text>
                            </Stack>
                            <Stack mt={8} align={'center'}>
                                <Button leftIcon={<FiBook/>} onClick={() => navigate('/menu')} size='lg' height='48px' width='200px' border='2px' variant='outline' colorScheme='#FEEBC8'>
                                    Menu
                                </Button>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Stack>
                <Box/>

            </Stack>
        </SidebarWithHeader>
    )
}

export default Home;
