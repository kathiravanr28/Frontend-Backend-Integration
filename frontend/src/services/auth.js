import api from "./api";

export const login = async ({ username, password }) => {
  const res = await api.post("/auth/login", { username, password });
  return res.data; // { token, username, ... }
};

export const logout = () => {
  localStorage.removeItem("user");
};