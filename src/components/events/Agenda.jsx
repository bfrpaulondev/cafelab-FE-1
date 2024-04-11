import SidebarWithHeader from "../shared/SideBar.jsx";
import {Box, Spinner, Stack, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {getEvents} from "../../services/event.js";
import {errorNotification} from "../../services/notification.js";
import React, {useEffect, useState} from "react";
import CardWithImage from "./EventCard.jsx";

const Agenda = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");
    const fetchEvents = () => {
        setLoading(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, date: '2022-12-01', name: 'Cafe Lab cultural', description: 'Description 1', local: 'Cafe Lab'},
                    { id: 2, date: '2022-12-02', name: 'Event 2', description: 'Description 2' , local: 'Feira'},
                    // Add more fake events as needed
                ]);
            }, 1000); // Simulate network delay
        })
            .then(res => {
                setEvents(res);
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
        fetchEvents();
    }, [])

    if (loading) {
        return (
            <SidebarWithHeader>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </SidebarWithHeader>
        )
    }

    if (err) {
        return (
            <SidebarWithHeader>
                <Text mt={5}>Ooops there was an error</Text>
            </SidebarWithHeader>
        )
    }

    if(events.length <= 0) {
        return (
            <SidebarWithHeader>
                <Text mt={5}>No events available</Text>
            </SidebarWithHeader>
        )
    }

    return (
        <SidebarWithHeader>
            <Stack className={"agenda-header"} align={"center"}>
                <Text className={"cafelab"} fontSize="6xl">
                    Acompanhe nossos eventos</Text>
            </Stack>
            <Wrap justify={"center"} spacing={"30px"}>
                {events.map((event, index) => (
                    <WrapItem key={index}>
                        <CardWithImage
                            {...event}
                            imageNumber={index}
                            fetchEvents={fetchEvents}
                        />
                    </WrapItem>
                ))}
            </Wrap>
        </SidebarWithHeader>
    )
}

export default Agenda;