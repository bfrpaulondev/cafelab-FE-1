import SidebarWithHeader from "./components/shared/SideBar.jsx";
import {Box, Button, Flex, Grid, GridItem, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {FiBook, FiCalendar, FiPackage, FiShoppingBag} from "react-icons/fi";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const stackSpacing = useBreakpointValue({base: "20px", md: "40px"});
    const boxPadding = useBreakpointValue({base: "5px", md: "10px"});
    const fontSize = useBreakpointValue({base: "6xl", md: "82px"});
    const fontSizeMenu = useBreakpointValue({base: "6xl", md: "62px"});
    const fontHl = useBreakpointValue({base: "6xl", md: "102px"});
    const fontHl2 = useBreakpointValue({base: "xl", md: "3xl"});
    const fontHl3 = useBreakpointValue({base: "lg", md: "2xl"});
    const sectWidth = useBreakpointValue({base: "100%", md: "50%"});
    const sectionHeight = useBreakpointValue({base: "720px", md: "700px"});
    const sectionPadding = useBreakpointValue({base: "150px", md: "200px"});
    const stickerPadding = useBreakpointValue({base: "20px 20px 20px 20px", md: "30px 30px 30px 30px"});
    const displayValue = useBreakpointValue({base: "none", md: "grid"});
    const gridValue = useBreakpointValue({base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"});

    const navigate = useNavigate();

    return (

        <SidebarWithHeader>
            <Stack>
                <Stack paddingY="20px" align="center" maxWidth="100%" /*backgroundImage="url('assets/phimg.jpg')"*/ spacing="40px">
                    <Stack justify="flex-start" align="center" spacing={stackSpacing} width="759px" maxWidth="100%">
                        <Stack justify="flex-start" align="center" spacing="0px">
                            <Text className="font-oliveAntique" fontWeight="extrabold" fontSize={fontSize} letterSpacing="-0.08em" color="#000000">
                                CAFELAB
                            </Text>
                            <Text fontFamily="Roboto" fontWeight="regular" fontSize={fontHl2} letterSpacing="tighter" color="#FFFFFF"
                                  textAlign="center" mx={4}>
                                <Box as="span" color="#000000">
                                    Uma nova loja! O seu novo café!
                                </Box>
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={"main-panel"} height={"500px"} paddingY="20px" justify="flex-end" align="center" direction="column" maxWidth="100%" mb={5} backgroundImage="url('assets/phimg.jpg')"
                       spacing="40px">

                    <Stack align={"center"} spacing={stackSpacing} width="759px" maxWidth="100%" mb={10}>

                        <div className="sticker-home">
                            NOVIDADE!
                        </div>
                        <Stack alignSelf="stretch" direction={['column', 'row']}  justify="center" align="center" spacing="12px" >
                            <Button leftIcon={<FiPackage/>} onClick={() => navigate('/subscricao')}>SUBSCRIÇÃO</Button>
                            <Button leftIcon={<FiShoppingBag/>} onClick={() => navigate('/boutique')}>
                                BOUTIQUE
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={["column", 'row']} spacing="4" align="center" justify="space-between">
                    <Stack spacing={stackSpacing} width={sectWidth}>
                        <Text className={"cafelab"} my={8} fontWeight="extrabold" align="center" fontSize={fontSize} lineHeight={"60%"} letterSpacing="-0.08em"
                              color="#000000">
                            Visite nosso espaço
                        </Text>
                        <Stack className={"mainPanels"} mx={4} align="center" backgroundSize={"cover"}
                               backgroundColor="cornsilk" /*backgroundImage="url('assets/terrace2.jpeg')"*/ spacing={stackSpacing}>
                            <Stack spacing={stackSpacing} justify="flex-start" maxWidth="100%" mt={4} mb={10}>
                                <Flex direction="column" justify="space-between" align="center" height="100%">
                                    <Stack justify="center" align="center" spacing={stackSpacing}>
                                        <Box mt={10} backgroundColor="rgba(245, 245, 240,0.5)" align="center" padding={boxPadding}>
                                            <Text fontFamily="Roboto" lineHeight="1.48" fontWeight="regular" fontSize={fontHl2} letterSpacing="-0.02em"
                                                  color="#FFFFFF"
                                                  alignSelf="stretch" textAlign="center" ml={4}>
                                                <Box as="span" color="#000000">
                                                    A primeira loja de café de especialidade de Oeiras.
                                                </Box>
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
                                    </Stack>
                                </Flex>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack justify="center" align="center" pt={10} width={sectWidth}>
                        <Stack className={"mainPanels main-panel"} p={4} backgroundSize={"cover"}
                               backgroundColor="cornsilk" spacing={stackSpacing}>
                            <div className="sticker p-3">
                                NOVO!
                            </div>
                            <Stack justify="flex-end" maxWidth="100%" mt={4} paddingBottom={"30px"}>
                                <Text className="font-oliveAntique text-center" fontSize={fontHl3}>MENU DE VERÃO</Text>
                                <Text className="font-oliveAntique text-center mb-5" fontSize={fontSizeMenu}>CAFELAB</Text>


                                <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                                    <Image src="assets/summerdinrk.jpeg" alt="terrace" objectFit="fill" width="100%" height="100%"/>
                                </Box>
                                <Stack justify="flex-end" maxWidth="100%" mt={sectionPadding}>
                                    <Text className="font-oliveAntique text-center" fontSize={"xl"}>Drinks refrescantes para o verão</Text>
                                </Stack>
                                <Stack my={8} align={'center'}>
                                    <Button leftIcon={<FiBook/>} onClick={() => navigate('/menu')} size='lg' height='48px' width='200px' border='2px'
                                            variant='outline' colorScheme='#FEEBC8'>
                                        Menu
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Box paddingY="10px">
                </Box>
                <Stack className={"mainPanels"} my={"10"} align='stretch' maxWidth="100%" backgroundSize={"cover"}
                       backgroundColor="cornsilk" spacing={stackSpacing}>
                    <Stack direction={["column", 'row']} mt={10} p={4}>
                        <Stack width={sectWidth}>
                            <Stack justify="flex-end" maxWidth="100%" mt={4}>
                                <Text className="font-oliveAntique text-center" fontSize={fontHl2}>CALENDARIO CULTURAL</Text>
                                <Text className="font-oliveAntique text-center mb-5" fontSize={fontHl}>CAFELAB</Text>
                            </Stack>
                            <Stack justify="flex-end" maxWidth="100%" mt={sectionPadding}>
                                <Text className="font-oliveAntique text-center" fontSize={"xl"}>Descubra nossos projetos e eventos</Text>
                            </Stack>
                            <Stack mt={8} align={'center'}>
                                <Button leftIcon={<FiCalendar/>} onClick={() => navigate('/agenda')} size='lg' height='48px' width='200px' border='2px'
                                        variant='outline' colorScheme='#FEEBC8'>
                                    Agenda
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack width={sectWidth}>
                            <Stack borderRadius={20} mx={3} my={2} height={"650px"} align="center" maxWidth="100%" backgroundSize={"cover"} className={"fill"}
                                   spacing="40px">
                                <Box width="100%" height="100%">
                                    <Image src="assets/phimg.jpg" alt="terrace" objectFit="fill" width="100%" height="100%"/>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Box paddingY="10px">
                </Box>
            </Stack>
        </SidebarWithHeader>
    )
}

export default Home;
