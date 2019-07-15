import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { completeTask } from '../../store/actions/tasks';

const TaskList = ({ tasks, dispatch }) => {
  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  const renderTasks = () => (tasks.length ? tasks.map(task => <TaskItem key={task.id} task={task} handleComplete={handleComplete} />)
    : <div>no tasks</div>);

  return (
    <div>{renderTasks()}</div>
  );
};

export default connect()(TaskList);
