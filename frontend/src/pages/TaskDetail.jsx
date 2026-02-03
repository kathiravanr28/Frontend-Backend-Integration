import { useParams } from "react-router-dom";
import "../styles/TaskDetail.css";

const TaskDetail = () => {
  const { id } = useParams();
  return <h3>Task Detail: {id}</h3>;
};

export default TaskDetail;