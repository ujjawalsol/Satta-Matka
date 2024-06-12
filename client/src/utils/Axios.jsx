import axios from 'axios';

export const baseURL = 'http://localhost:9000/api';

const axiosInstance = axios.create({
    baseURL,
    timeout: 10000 // 10 seconds timeout
});

export const sendRequest = async (method, url, data = null) => {
    try {
        const response = await axiosInstance({
            method,
            url,
            data,
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};
