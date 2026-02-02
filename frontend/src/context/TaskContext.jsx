import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (task) => {
    const res = await api.post("/tasks", task);
    setTasks((prev) => [...prev, res.data]);
  };

  const updateTask = async (id, task) => {
    const res = await api.put(`/tasks/${id}`, task);
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? res.data : t))
    );
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};