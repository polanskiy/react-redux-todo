import React from 'react';
import {
  TaskItemBox, TaskItemTitle, TaskItemDescription, TaskItemBtn, TaskItemBtns,
} from '../../styles/Task';

const TaskItem = ({
  task, handleComplete, handleEdit, handleRemove,
}) => {
  const { title, description, complete } = task;

  return (
    <TaskItemBox complete={complete}>
      <TaskItemTitle complete={complete}>{title}</TaskItemTitle>
      <TaskItemDescription>{description}</TaskItemDescription>
      <TaskItemBtns>
        <TaskItemBtn onClick={() => handleComplete(task.id)}>{complete ? 'completed' : 'complete'}</TaskItemBtn>
        <TaskItemBtn onClick={() => handleEdit(task)}>edit</TaskItemBtn>
        <TaskItemBtn color="danger" onClick={() => handleRemove(task.id)}>remove</TaskItemBtn>
      </TaskItemBtns>

    </TaskItemBox>
  );
};

export default TaskItem;
