import { useState } from "react";

const TaskForm = ({ onSave }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title });
    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;