import {Card, CardBody, Heading, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";

const Resultado = ({exp, sabor, uso}) => {

    const fontSize = useBreakpointValue({base: "6xl", md: "52px"});
    const fontSize2 = useBreakpointValue({base: "3xl", md: "32px"});

    return (
        <Stack>
            <Card
                direction={{base: 'column', sm: 'row'}}
            >
                <Image
                    objectFit='cover'
                    maxW={{base: '100%', sm: '200px'}}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Text size='md'>{exp}</Text>
                        <Text size='md'>{sabor}</Text>
                        <Text size='md'>{uso}</Text>


                        { (sabor == 0 && uso in [0, 1]) ? (
                            <Text py='2'>Recomendamos grãos arábica por serem mais suaves e menos amargos. Além de serem adequados a prensa francesa e cafeteira
                            italiana.</Text>
                        ) : (sabor == 0 && uso == 3) ? (
                            <Text py='2'>Recomendamos grãos arábica por serem mais suaves e menos amargos. .</Text>
                            ) : (<Text py='2'>Recomendamos grãos arábica por serem mais suaves e menos amargos. Além de serem adequados a prensa francesa e cafeteira
                            italiana.</Text>)
                        }
                    </CardBody>
                </Stack>
            </Card>
        </Stack>
    )
}


export default Resultado;