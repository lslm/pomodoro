import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { ListItem, ListItemText, MenuItem, ListItemIcon, ListItemButton } from '@mui/material';
import Submenu from './Submenu';

const TaskItem = ({ task }) => {
  const { updateCurrentTask, deleteTask, updateTask } = useContext(TaskContext);
  const [ isEditing, setIsEditing ] = useState(false);

  const increasePomodoro = () => {
    task.pomorodos++;
    updateTask(task);
  }

  const decreasePomodoro = () => {
    if (task.pomorodos > 0) {
      task.pomorodos--;
      updateTask(task);
    }
  }

  const setEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleDelete = () => {
    deleteTask(task);
  }

  return (
    <ListItem
      secondaryAction={
        <Submenu>
          <MenuItem onClick={increasePomodoro}>Aumentar</MenuItem>
          <MenuItem onClick={decreasePomodoro}>Diminuir</MenuItem>
          <MenuItem onClick={setEditing}>Editar</MenuItem>
          <MenuItem onClick={handleDelete}>Excluir</MenuItem>
        </Submenu>
      }>
      <ListItemButton onClick={() => updateCurrentTask(task)}>
        <ListItemIcon>
          <ListItemText primary={task.pomorodos} />
        </ListItemIcon>
        <ListItemText primary={task.title} />
      </ListItemButton>
    </ListItem>
  );
}

export default TaskItem;
