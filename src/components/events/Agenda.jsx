import SidebarWithHeader from "../shared/SideBar.jsx";
import {Spinner, Stack, Text, Wrap, WrapItem} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import CardWithImage from "./EventCard.jsx";
import {createClient} from '@supabase/supabase-js'

const Agenda = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    // const fetchEvents = () => {
    //     setLoading(true);
    //     // new Promise((resolve, reject) => {
    //     //     setTimeout(() => {
    //     //         resolve([
    //     //             { id: 1, date: '2022-12-01', name: 'Cafe Lab cultural', description: 'Description 1', local: 'Cafe Lab'},
    //     //             { id: 2, date: '2022-12-02', name: 'Event 2', description: 'Description 2' , local: 'Feira'},
    //     //             // Add more fake events as needed
    //     //         ]);
    //     //     }, 1000); // Simulate network delay
    //     // })
    // }

    useEffect(() => {
        getEvents();
    }, [])

    async function getEvents() {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('events')
                .select()
            console.log(data)
            setEvents(data);
            if (error) {
                setError(error.message);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

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