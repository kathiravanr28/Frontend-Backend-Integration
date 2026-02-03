import { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../services/tasks";
import { connectWebSocket } from "../services/socket";
import { Task } from "../types/Task";

export default function TaskList({ tasks, setTasks }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();

    // Connect WebSocket for live updates
    connectWebSocket((updatedTask) => {
      setTasks((prev) => {
        const exists = prev.find((t) => t.id === updatedTask.id);
        if (exists) {
          // Update existing task
          return prev.map((t) => (t.id === updatedTask.id ? updatedTask : t));
        } else {
          // Add new task
          return [...prev, updatedTask];
        }
      });
    });
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  const toggleComplete = async (task) => {
    const updated = await updateTask(task.id, {
      title: task.title,
      completed: !task.completed,
    });
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "0.5rem" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task)}
            style={{ marginRight: "0.5rem" }}
          />
          {task.title}
          <button
            onClick={() => handleDelete(task.id)}
            style={{ marginLeft: "1rem", padding: "0.25rem 0.5rem" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}