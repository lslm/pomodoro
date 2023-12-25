import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

const TasksList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
}

export default TasksList;
