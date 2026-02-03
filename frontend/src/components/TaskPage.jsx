import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Task } from "../types/Task";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]); // array of Task objects

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>My Tasks</h2>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}