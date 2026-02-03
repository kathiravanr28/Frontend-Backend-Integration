import "../styles/TaskList.css";
export default function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.title}
          <button onClick={() => onDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}