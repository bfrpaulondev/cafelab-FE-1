import React, {useEffect, useState} from "react";
import SidebarWithHeader from "../shared/SideBar.jsx";
import OurPicks from "./OurPicks.jsx";
import {Button, Spinner, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import ProductList from "./ProductList.jsx";
import {getProductsBySection, Sections} from "../../services/productsService.jsx";
import {FiPackage, FiShoppingBag} from "react-icons/fi";
import * as url from "url";

export default function Boutique() {

    const fontTitleSize = useBreakpointValue({base: "60px", md: "62px"});
    const fontHeadlineSize = useBreakpointValue({base: "lg", md: "2xl"});
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [section, setSection] = useState();
    const spacingTitle = useBreakpointValue({base: "70px", md: "100px"});
    const fontSize = useBreakpointValue({base: "5xl", md: "62px"});

    useEffect(() => {
        setIsLoading(true);
        getProductsBySection(section)
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [section]);

    return (
        <SidebarWithHeader>
            <Stack className={"main-panel"} height={"300px"} paddingTop={spacingTitle} maxWidth="100%"
                   backgroundImage="url('assets/capa_bnw.jpeg')"
                   backgroundSize="cover"
                   backgroundPosition="center"
                   >

                <Stack align={"center"} maxWidth="100%" mb={10} ml={useBreakpointValue({md: 20})}>
                    <Stack alignSelf="stretch" direction={['column', 'row']}  justify="center" align="center" spacing="12px" >
                        <Text className="font-oliveAntique" align="center" fontWeight="extrabold"
                              fontSize={fontTitleSize} letterSpacing="-0.08em"
                              style={{ WebkitTextStroke: "3px white" }}
                              color="#000000">
                            CAFELAB BOUTIQUE
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack backgroundColor={"#81938c"}>
                <Stack justify="flex-start" align="center" my={6} mx={4} spacing="24px">

                    <Text maxW={"800px"} fontFamily="Roboto" fontWeight="regular" fontSize={fontHeadlineSize} letterSpacing="tighter" color="black"
                          textAlign="center" mx={4}>
                        CAFELAB BOUTIQUE!<br/>
                        Além dos cafés especiais e acessórios, trazemos agora uma coleção exclusiva de Ecobags, Aventais, Chávenas e muito mais!
                        Tudo pensado e produzido com o nosso compromisso ecológico e visando fortalecer ainda mais a nossa comunidade.
                    </Text>
                    <Stack direction={'row'}>
                        <Button variant={"outline"} onClick={(event) => {
                            setSection(prevSection => prevSection === Sections.CAFE ? null : Sections.CAFE);
                            event.currentTarget.blur();
                        }}>
                            Café
                        </Button>
                        <Button variant={"outline"} onClick={(event) => {
                            setSection(prevSection => prevSection === Sections.BOUTIQUE ? null : Sections.BOUTIQUE);
                            event.currentTarget.blur();
                        }}>
                            Boutique
                        </Button>
                    </Stack>
                </Stack>

                {isLoading ? (
                    <Spinner/>
                ) : (
                    <ProductList products={products}/>
                )}

                <Stack align={"center"} mx={10} p={10}>
                    <OurPicks/>
                </Stack>
            </Stack>
        </SidebarWithHeader>
    );
}