import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const handleEdit = (task) => {
    const newTitle = prompt("Edit task", task.title);
    if (newTitle && newTitle.trim()) {
      onEdit(task.id, { ...task, title: newTitle });
    }
  };

  return (
    <ul>
      {tasks.length === 0 && <li>No tasks found</li>}

      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}

          <button onClick={() => handleEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;