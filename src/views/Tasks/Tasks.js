import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NewTask from './NewTask';
import TaskList from './TaskList';
import { setTasks } from '../../store/actions/tasks';
import useToggle from '../../hooks/useToggle';


const Tasks = ({ dispatch, tasks }) => {
  const initData = {
    id: '',
    title: '',
    description: '',
    complete: false,
  };
  const [isOpen, toggleOpen] = useToggle(false);
  const [taskData, setTaskData] = useState(initData);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(setTasks());
  }, [dispatch]);

  const handleEdit = (task) => {
    toggleOpen();
    setTaskData(task);
    setEdit(true);
  };

  return (
    <React.Fragment>
      <NewTask
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        taskData={taskData}
        setTaskData={setTaskData}
        initData={initData}
        edit={edit}
        setEdit={setEdit}
      />
      <TaskList tasks={tasks} handleEdit={handleEdit} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Tasks);
