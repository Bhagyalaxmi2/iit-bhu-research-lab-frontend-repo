import axios from "axios";

// Backend API URL
//const API_URL = "http://localhost:5000/api/publications";
const API_URL = `${import.meta.env.VITE_API_URL}/api/publications`;


// ==========================================
// GET ALL PUBLICATIONS
// ==========================================

export const getPublications = async () => {
    const response = await axios.get(API_URL);

    return response.data;
};


// ==========================================
// CREATE PUBLICATION
// ==========================================

export const addPublication = async (publication) => {
    const response = await axios.post(
        API_URL,
        publication
    );

    return response.data;
};


// ==========================================
// UPDATE PUBLICATION
// ==========================================

export const updatePublication = async (id, publication) => {
    const response = await axios.put(
        `${API_URL}/${id}`,
        publication
    );

    return response.data;
};


// ==========================================
// DELETE PUBLICATION
// ==========================================

export const deletePublication = async (id) => {
    const response = await axios.delete(
        `${API_URL}/${id}`
    );

    return response.data;
};