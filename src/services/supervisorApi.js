import api from "./api";

export const getSupervisor = async () => (await api.get("/supervisor")).data;
export const updateSupervisor = async (supervisor) => (await api.put("/supervisor", supervisor)).data;
