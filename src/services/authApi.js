import api from "./api";

export const loginAdmin = async (credentials) => (await api.post("/auth/login", credentials)).data;
