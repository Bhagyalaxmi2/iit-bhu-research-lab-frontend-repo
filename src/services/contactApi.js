import api from "./api";

export const sendMessage = async (message) => (await api.post("/contact", message)).data;
