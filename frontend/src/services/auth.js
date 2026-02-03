import api from "./api";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};

export const register = async (name, email, password) => {
  const res = await api.post("/auth/register", { name, email, password });
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};