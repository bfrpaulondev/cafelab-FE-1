import axios from 'axios';

const API_URL = 'https://coffelab-api.onrender.com/contact';

const ServiceForm = {
    post: async (data: any) => {
        const postData = {
            "first_name": data.first_name,
            "last_name": data.last_name,
            "phone": data.phone,
            "email": data.email,
            "description": data.description
        };

        try {
            const response = await axios.post(API_URL, postData);
            return response.data;
        } catch (error) {
            console.error('Error while making POST request:', error);
            throw error;
        }
    },

    get: async () => {
        try {
            const response = await axios.get(API_URL + '/all');
            return response.data;
        } catch (error) {
            console.error('Error while making GET request:', error);
            throw error;
        }
    },

    delete: async (id: string) => {
        try {
            const response = await axios.delete(`${API_URL}/?contact_id=${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while making DELETE request:', error);
            throw error;
        }
    },


};

export default ServiceForm;

