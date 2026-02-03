import api from "./api";

// get all tasks
export const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data; // array of task objects
};

// create a new task
export const createTask = async (task) => {
  // task = { title: "Task title", completed: false }
  const res = await api.post("/tasks", task);
  return res.data;
};

// update a task
export const updateTask = async (id, task) => {
  const res = await api.put(`/tasks/${id}`, task);
  return res.data;
};

// delete a task
export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};