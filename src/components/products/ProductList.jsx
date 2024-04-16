import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import {Button, Card, CardBody, CardFooter, Divider, Heading, Image, Spinner, Stack, Text, useBreakpointValue, Wrap, WrapItem} from "@chakra-ui/react";
import {ButtonGroup} from "react-bootstrap";
import {MdAddShoppingCart} from "react-icons/md";

const supabase = createClient("https://sbkrffeyngcjbzrwhvdq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNia3JmZmV5bmdjamJ6cndodmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxOTM2MjgsImV4cCI6MjAyODc2OTYyOH0.COR1kdIkfK19CRDIrdwmI2CQD8VXdnF46cc0Ql8ofyU");
const euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
});

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    const fontHl3 = useBreakpointValue({base: "lg", md: "2xl"});

    useEffect(() => {

        async function getProducts() {
            setLoading(true);
            try {
                const {data, error} = await supabase
                    .from('products')
                    .select()
                console.log(data)
                setProducts(data);
                if (error) {
                    setError(error.message);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);

    if (loading) {
        return (
            <Spinner
                alignSelf={"center"}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        )
    }

    if (err) {
        return (
            <Text alignSelf={"center"} mt={5}>err</Text>
        )
    }

    if (products.length <= 0) {
        return (
            <Text mt={5}>No products available</Text>
        )
    }

    return (
        <Wrap justify={"center"} spacing={"30px"} m={5}>
            {
                products.map((product) => (
                    <WrapItem>
                        <Card maxW='sm' bgColor={"AppWorkspace"}>
                            <CardBody>
                                <Stack mt='6' spacing='8'>
                                    <Text className="font-oliveAntique text-center" fontSize={fontHl3}>{product.nome}</Text>
                                    <Image
                                        src={product.imagem}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Text maxHeight={"100px"} overflow="hidden" textOverflow="ellipsis" >
                                        {product.descricao}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl' alignSelf={"right"}>
                                        {euro.format(product.preco)}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue' leftIcon={<MdAddShoppingCart />}>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                ))
            }
        </Wrap>
    );
};

export default ProductList;