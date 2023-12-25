import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { ListItem, ListItemText, MenuItem, ListItemIcon } from '@mui/material';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Submenu from './Submenu';

const TaskItem = ({ task }) => {
  const { updateCurrentTask, deleteTask, updateTask } = useContext(TaskContext);
  const [ isEditing, setIsEditing ] = useState(false);

  const increasePomodoro = () => {
    task.pomorodos++;
    updateTask(task);
  }

  const decreasePomodoro = () => {
    task.pomorodos--;
    updateTask(task);
  }

  const setEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleDelete = () => {
    deleteTask(task);
  }

  return (
    <ListItem
      onClick={() => updateCurrentTask(task)}
      secondaryAction={
        <Submenu>
          <MenuItem onClick={increasePomodoro}>Aumentar</MenuItem>
          <MenuItem onClick={decreasePomodoro}>Diminuir</MenuItem>
          <MenuItem onClick={setEditing}>Editar</MenuItem>
          <MenuItem onClick={handleDelete}>Excluir</MenuItem>
        </Submenu>
      }>
      <ListItemIcon>
        <ListItemText primary={task.pomorodos} />
      </ListItemIcon>
      <ListItemText primary={task.title} />
    </ListItem>
  );
}

export default TaskItem;
