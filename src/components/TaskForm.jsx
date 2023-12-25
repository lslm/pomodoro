import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TextField } from "@mui/material";
import './TaskForm.css';

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
      <TextField
        type="text"
        value={task}
        sx={{ width: '100%', marginBottom: '2rem' }}
        placeholder="Nome da tarefa"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="button" type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
