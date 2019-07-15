import React from 'react';
import { connect } from 'react-redux';
import {
  NewTaskBox, Btn, NewTaskInputs, NewTaskLabel, Input, LabelText,
} from '../../styles/Task';
import Modal from '../Modal';
import { addTask, editTask } from '../../store/actions/tasks';
import pseudoid from '../../utils/pseudoId';

const NewTask = ({
  dispatch, taskData, setTaskData, toggleOpen, isOpen, initData, edit, setEdit,
}) => {
  console.log('taskData', taskData);
  const { title, description } = taskData;


  const handleInput = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const createTask = () => {
    if (title.trim()) {
      taskData.id = pseudoid(9);
      dispatch(addTask(taskData));
      toggleOpen();
      setTaskData(initData);
    }
  };

  const updateTask = () => {
    if (title.trim()) {
      dispatch(editTask(taskData));
      toggleOpen();
      setTaskData(initData);
      setEdit(false);
    }
  };

  const handleClose = () => {
    toggleOpen();
    setTaskData(initData);
    setEdit(false);
  };

  return (
    <NewTaskBox>
      <Btn onClick={() => toggleOpen()}>New Task</Btn>
      <Modal title={edit ? 'Edit Task' : 'New Task'} isOpen={isOpen} handleClose={handleClose}>
        <NewTaskInputs>
          <NewTaskLabel required>
            <LabelText>Task Title:</LabelText>
            <Input type="text" name="title" value={title} onChange={handleInput} />
          </NewTaskLabel>
          <NewTaskLabel>
            <LabelText>Task Description:</LabelText>
            <Input type="text" name="description" value={description} onChange={handleInput} />
          </NewTaskLabel>
        </NewTaskInputs>
        <Btn onClick={edit ? updateTask : createTask}>{edit ? 'Save Changes' : 'Add Task'}</Btn>
      </Modal>
    </NewTaskBox>
  );
};

export default connect()(NewTask);
