import axios from "axios";


const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})
export const getEvents = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/events`,
            getAuthConfig()
        )
    } catch (e) {
        throw e;
    }
}