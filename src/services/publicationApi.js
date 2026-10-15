import api from "./api";

export const getPublications = async () => (await api.get("/publications")).data;
export const addPublication = async (publication) => (await api.post("/publications", publication)).data;
export const updatePublication = async (id, publication) => (await api.put(`/publications/${id}`, publication)).data;
export const deletePublication = async (id) => (await api.delete(`/publications/${id}`)).data;
