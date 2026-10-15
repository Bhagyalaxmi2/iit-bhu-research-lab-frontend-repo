import api from "./api";

export const getPeople = async () => (await api.get("/people")).data;
export const addPerson = async (person) => (await api.post("/people", person)).data;
export const updatePerson = async (id, person) => (await api.put(`/people/${id}`, person)).data;
export const deletePerson = async (id) => (await api.delete(`/people/${id}`)).data;
