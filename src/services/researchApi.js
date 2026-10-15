import api from "./api";

export const getResearch = async () => (await api.get("/research")).data;
export const addResearch = async (research) => (await api.post("/research", research)).data;
export const updateResearch = async (id, research) => (await api.put(`/research/${id}`, research)).data;
export const deleteResearch = async (id) => (await api.delete(`/research/${id}`)).data;
