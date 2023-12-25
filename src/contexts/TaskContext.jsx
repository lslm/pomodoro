import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const updateCurrentTask = (task) => {
    setCurrentTask(task);
  }

  const updateTask = (task) => {
    setTasks(tasks.map((t) => t.id === task.id ? task : t));
  }

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false,
      pomorodos: 0,
    }

    setTasks([...tasks, newTask]);
  }

  return (
    <TaskContext.Provider value={{ addTask, tasks, updateCurrentTask, currentTask, deleteTask, updateTask }}>{children}</TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
