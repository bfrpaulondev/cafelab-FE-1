import React, {useEffect, useState} from "react"
import {Box, Button, Spinner, Stack, Text, WrapItem} from "@chakra-ui/react";
import {errorNotification} from "../../services/notification.js";
import ProductCarouselItem from "./ProductCarouselItem.jsx";
import SidebarWithHeader from "../shared/SideBar.jsx";
import ModalQuiz from "../subscricao/ModalQuiz.jsx";

const Carousel = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");
    const fetchProducts = () => {
        setLoading(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, nome: 'Brazil Santos', descricao: 'This Arabica is dry processed while it is in the cherry, so that part of the sweetness of the fruit is transported to the glass.\n' +
                            'A typical Arabica from Brazil. Soft, balanced, medium body and low acidity, with notes of chocolate and dried fruits. This is one of those cafes that brings us nostalgia in its profile.', origem: 'Brasil', variedade: 'Catuaí and Bourbon', grao: 'Arabica', preco: '5.00', imagem: './src/assets/brasil.jpg', alt: 'Brazil Santos'},
                    { id: 2, nome: 'Vietnam', descricao: 'Vietnam is the leader in production of the Robusta species, being the second largest coffee producer in the world. The traditional and natural process gives this grain superior quality: medium/strong body, balanced, woody and notes of dark chocolate and dried fruits.',
                        origem: 'Planalto Central', variedade: 'Robusta', grao: 'Robusta', preco: '5.00', imagem: './src/assets/vietnam.png', alt: 'Vietnam'},
                ]);
            }, 1000); // Simulate network delay
        })
            .then(res => {
                setProducts(res);
            })
            .catch(err => {
                setError('An error occurred');
                errorNotification('Error', 'An error occurred');
            })
            .finally(() => {
                setLoading(false);
            });
        // getEvents().then(res => {
        //     setEvents(res.data)
        // }).catch(err => {
        //     setError(err.response.data.message)
        //     errorNotification(
        //         err.code,
        //         err.response.data.message
        //     )
        // }).finally(() => {
        //     setLoading(false)
        // })
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    if (loading) {
        return (
                <Spinner
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
                <Text mt={5}>Ooops there was an error</Text>
        )
    }

    if(products.length <= 0) {
        return (
                <Text mt={5}>No products available</Text>
        )
    }

    return (
        <Stack id="cafeCarousel" className="carousel slide" m={8}>
            <div className="carousel-inner">
                {products.map((product, index) => (
                        <ProductCarouselItem
                            {...product}
                            imageNumber={index}
                            fetchProducts={fetchProducts}
                        />
                    ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cafeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cafeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Stack>
    )
}

export default Carousel;