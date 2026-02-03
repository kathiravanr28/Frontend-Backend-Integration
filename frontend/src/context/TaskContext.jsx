import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  // Add a new task
  const addTask = async (task) => {
    const res = await api.post("/tasks", task);
    setTasks((prev) => [...prev, res.data]);
  };

  // Update a task
  const updateTask = async (id, updatedTask) => {
    const res = await api.put(`/tasks/${id}`, updatedTask);
    setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
  };

  // Update only the status of a task
  const updateTaskStatus = async (id, status) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    await updateTask(id, { ...task, status });
  };

  // Delete a task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, updateTaskStatus, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};