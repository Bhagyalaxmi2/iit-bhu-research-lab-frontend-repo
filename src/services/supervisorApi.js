import axios from "axios";

//const API_URL = "http://localhost:5000/api/supervisor";
const API_URL = `${import.meta.env.VITE_API_URL}/api/supervisor`;

// ======================================================
// GET SUPERVISOR DATA
// ======================================================

export const getSupervisor = async () => {
    const response = await axios.get(API_URL);

    return response.data;
};


// ======================================================
// UPDATE SUPERVISOR DATA
// ======================================================

export const updateSupervisor = async (supervisor) => {
    const response = await axios.put(API_URL, supervisor);

    return response.data;
};