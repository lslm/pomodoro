import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
