import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  NewTaskBox, Btn, NewTaskInputs, NewTaskLabel, Input, LabelText,
} from '../../styles/Task';
import Modal from '../Modal';
import useToggle from '../../hooks/useToggle';
import { addTask } from '../../store/actions/tasks';
import pseudoid from '../../utils/pseudoId';

const NewTask = ({ dispatch }) => {
  const initData = {
    id: '',
    title: '',
    description: '',
    complete: false,
  };
  const [isOpen, toggleOpen] = useToggle(false);
  const [taskData, setTaskData] = useState(initData);
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

  return (
    <NewTaskBox>
      <Btn onClick={() => toggleOpen()}>New Task</Btn>
      <Modal title="New Task" isOpen={isOpen} handleClose={toggleOpen}>
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
        <Btn onClick={createTask}>Add Task</Btn>
      </Modal>
    </NewTaskBox>
  );
};

export default connect()(NewTask);
