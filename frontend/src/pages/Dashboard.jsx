import React from "react";
import TaskForm from "../components/TaskForm.jsx";
import TaskBoard from "../components/TaskBoard.jsx";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TaskForm />
      <TaskBoard />
    </div>
  );
}