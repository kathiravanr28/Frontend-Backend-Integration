import api from "../api/api";

export const useAuth = () => {
  const login = async ({ email, password }) => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("user", JSON.stringify({ token: res.data.token }));
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.token;
  };

  return { login, logout, getToken };
};