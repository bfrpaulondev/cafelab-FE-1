import SidebarWithHeader from "../shared/SideBar.jsx";
import {Spinner, Stack, Text, Wrap, WrapItem} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import CardWithImage from "./EventCard.jsx";
import { getEvents } from '../../services/eventService.js';

const Agenda = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    useEffect(() => {
        fetchEvents();
    }, [])

    async function fetchEvents() {
        setLoading(true);
        try {
            const data = await getEvents();
            console.log("data: ", data);
            setEvents(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

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
        console.log(err)
        return (
            <SidebarWithHeader>
                <Text mt={5}>err</Text>
            </SidebarWithHeader>
        )
    }

    if (events.length <= 0) {
        return (
            <SidebarWithHeader>
                <Text mt={5}>No events available</Text>
            </SidebarWithHeader>
        )
    }

    return (
        <SidebarWithHeader>
            <Stack backgroundColor={"#556560"}>
                <Stack className={"agenda-header"} m={4}>
                    <Text className={"cafelab"} align={"center"} fontSize="5xl">
                        Acompanhe nossos eventos</Text>
                </Stack>
                <Wrap justify={"center"} spacing={"30px"}>
                    {events.map((event, index) => (
                        <WrapItem key={index}>
                            <CardWithImage
                                {...event}
                                imageNumber={index}
                                events={getEvents}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            </Stack>
        </SidebarWithHeader>
    )
}

export default Agenda;