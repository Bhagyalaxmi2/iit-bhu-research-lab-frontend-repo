import axios from "axios";

//const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`;
const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`;
export const sendMessage = async (message) => {
    const response = await axios.post(API_URL, message);
    return response.data;
};