import React from 'react';
import {
  TaskItemBox, TaskItemTitle, TaskItemDescription, TaskItemComplete,
} from '../../styles/Task';

const TaskItem = ({ task, handleComplete }) => {
  const { title, description, complete } = task;

  return (
    <TaskItemBox complete={complete}>
      <TaskItemTitle complete={complete}>{title}</TaskItemTitle>
      <TaskItemDescription>{description}</TaskItemDescription>
      <TaskItemComplete onClick={() => handleComplete(task.id)}>{complete ? 'completed' : 'complete'}</TaskItemComplete>
      <TaskItemComplete onClick={() => handleComplete(task.id)}>{complete ? 'completed' : 'complete'}</TaskItemComplete>
    </TaskItemBox>
  );
};

export default TaskItem;
