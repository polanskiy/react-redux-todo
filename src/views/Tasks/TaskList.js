import React from 'react';

const TaskList = ({ tasks }) => {
  const renderTasks = () => (tasks.length ? tasks.map(task => <div key={task.id}>{task.title}</div>)
    : <div>no tasks</div>);
  return (
    <div>{renderTasks()}</div>
  );
};

export default TaskList;
