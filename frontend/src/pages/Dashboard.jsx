import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../services/taskService";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <>
      <TaskForm onTaskAdded={addTask} />
      <TaskList tasks={tasks} onDelete={removeTask} />
    </>
  );
}