import { useState } from "react";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;

    onTaskAdded({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add</button>
    </form>
  );
}