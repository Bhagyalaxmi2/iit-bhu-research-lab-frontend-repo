import axios from "axios";

//const API_URL = "http://localhost:5000/api/people";
const API_URL = `${import.meta.env.VITE_API_URL}/api/people`;

// GET all people
export const getPeople = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// ADD a person
export const addPerson = async (person) => {
    const response = await axios.post(API_URL, person);
    return response.data;
};

// UPDATE a person
export const updatePerson = async (id, person) => {
    const response = await axios.put(
        `${API_URL}/${id}`,
        person
    );

    return response.data;
};

// DELETE a person
export const deletePerson = async (id) => {
    const response = await axios.delete(
        `${API_URL}/${id}`
    );

    return response.data;
};