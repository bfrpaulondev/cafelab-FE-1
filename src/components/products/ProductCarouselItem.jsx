import {Button, Grid, GridItem, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {FiCalendar, FiPackage} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

export default function ProductCarouselItem({id, nome, descricao, origem, variedade, grao, preco, imagem, alt}) {
    const stackSpacing = useBreakpointValue({base: "20px", md: "40px"});
    const fontHl = useBreakpointValue({base: "6xl", md: "52px"});
    const fontHl2 = useBreakpointValue({base: "xl", md: "2xl"});
    const sectionHeight = useBreakpointValue({base: "90%", md: "90%"});
    const gridValue = useBreakpointValue({base: "repeat(2, 1fr)", md: "repeat(2, 1fr)"});

    const navigate = useNavigate();

    return (
        <div className={id === 1 ? "carousel-item active" : "carousel-item"}>
            <Stack alignItems="center" align="center" spacing="24px" mx={4}>
                <Stack className={"mainPanels"} m={"20px"} height={sectionHeight} align='stretch' maxWidth="100%" backgroundSize={"cover"}
                       backgroundColor="cornsilk" spacing={stackSpacing}>
                    <Grid
                        m={4}
                        height={sectionHeight}
                        templateColumns={gridValue}
                    >
                        <GridItem alignSelf="center" rowSpan={1} m={"15%"}>
                            <Image src={imagem} alt={alt} objectFit="cover" />
                        </GridItem>
                        <GridItem rowSpan={1} mr={"15%"} mt={"10%"}>
                            <Stack justify="flex-end" maxWidth="100%" mt={4}>
                                <Text className="font-oliveAntique text-center" fontSize={fontHl}>{nome}</Text>
                                <Text className="font-oliveAntique text-center" fontSize={fontHl2}>Origem:{origem}</Text>
                            </Stack>
                            <Stack justify="flex-end" maxWidth="100%" mt={5}>
                                <Text className="font-oliveAntique text-left" fontSize={"lg"}>{descricao}</Text>
                            </Stack>
                            <Stack justify="flex-end" maxWidth="100%">
                                <Text className="font-oliveAntique text-left" fontSize={"lg"}>Variedade: {variedade}</Text>
                            </Stack>

                            <Stack mt={8} align={'center'}>
                                <Button leftIcon={<FiPackage/>} onClick={() => navigate('/agenda')} size='lg' height='48px'  border='2px' variant='outline' colorScheme='#FEEBC8'>
                                    Adicionar a subscrição
                                </Button>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Stack>
            </Stack>
        </div>
    )
}