import { useTasks } from "../hooks/useTasks";
import { useAuth } from "../hooks/useAuth";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const { tasks, addTask, deleteTask } = useTasks();
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <TaskForm onSave={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default Dashboard;