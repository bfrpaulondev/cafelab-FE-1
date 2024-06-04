import axios from 'axios';

const API_URL = 'https://cafelab-service-new.onrender.com/orders';


const OrderService = {
    createOrder: async (data) => {
        try {
            const response = await axios.post(API_URL, data);
            return response.data;
        } catch (error) {
            console.error('Error while making POST request:', error);
            throw error;
        }
    },
    updateOrder: async ( data) => {
        try {
            const response = await axios.put(API_URL, data);
            return response.data;
        } catch (error) {
            console.error('Error while making PUT request:', error);
            throw error;
        }
    },
    getAll: async () => {
        try {
            const response = await axios.get(`${API_URL}/all`);
            return response.data;
        } catch (error) {
            console.error('Error while making GET request:', error);
            throw error;
        }
    },
    deleteOrder: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while making DELETE request:', error);
            throw error;
        }
    },
}
export default OrderService