import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { completeTask } from '../../store/actions/tasks';

const TaskList = ({ tasks, dispatch, handleEdit }) => {
  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  const handleRemove = (id) => {

  };

  const renderTasks = () => (tasks.length ? tasks.map(task => (
    <TaskItem
      key={task.id}
      task={task}
      handleComplete={handleComplete}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  ))
    : <div>no tasks</div>);

  return (
    <div>{renderTasks()}</div>
  );
};

export default connect()(TaskList);
