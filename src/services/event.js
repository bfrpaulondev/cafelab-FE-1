import axios from "axios";


export const getEvents = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/events`
        )
    } catch (e) {
        throw e;
    }
}