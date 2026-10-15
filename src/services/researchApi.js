import axios from "axios";

//const API_URL = "http://localhost:5000/api/research";
const API_URL = `${import.meta.env.VITE_API_URL}/api/research`;

// GET
export const getResearch = async () => {

    const response = await axios.get(API_URL);

    return response.data;
};


// CREATE
export const addResearch = async (research) => {

    const response = await axios.post(
        API_URL,
        research
    );

    return response.data;
};


// UPDATE
export const updateResearch = async (
    id,
    research
) => {

    const response = await axios.put(
        `${API_URL}/${id}`,
        research
    );

    return response.data;
};


// DELETE
export const deleteResearch = async (id) => {

    const response = await axios.delete(
        `${API_URL}/${id}`
    );

    return response.data;
};