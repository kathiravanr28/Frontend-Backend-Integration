import { useState } from "react";
import { createTask } from "../services/tasks";
import { Task } from "../types/Task";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    // create task object matching Task type
    const newTask = await createTask({ title, completed: false });

    onTaskAdded(newTask); // notify parent to update list
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <button type="submit" style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}