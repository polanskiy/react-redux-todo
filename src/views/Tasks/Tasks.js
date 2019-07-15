import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTask from './NewTask';
import TaskList from './TaskList';
import { setTasks } from '../../store/actions/tasks';

const Tasks = ({ dispatch, tasks }) => {
  useEffect(() => {
    dispatch(setTasks());
  }, [dispatch]);

  return (
    <React.Fragment>
      <NewTask />
      <TaskList tasks={tasks} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Tasks);
