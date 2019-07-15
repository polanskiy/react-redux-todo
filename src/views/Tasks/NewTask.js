import React, { useState } from 'react';
import {
  NewTaskBox, Btn, NewTaskInputs, NewTaskLabel, Input, LabelText,
} from '../../styles/Task';
import Modal from '../Modal';
import useToggle from '../../hooks/useToggle';

const NewTask = () => {
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

  return (
    <NewTaskBox>
      <Btn onClick={() => toggleOpen()}>New Task</Btn>
      <Modal title="New Task" isOpen={isOpen} handleClose={toggleOpen}>
        <NewTaskInputs>
          <NewTaskLabel>
            <LabelText>Task Title:</LabelText>
            <Input type="text" name="title" value={title} onChange={handleInput} />
          </NewTaskLabel>
          <NewTaskLabel>
            <LabelText>Task Description:</LabelText>
            <Input type="text" name="description" value={description} onChange={handleInput} />
          </NewTaskLabel>
        </NewTaskInputs>
        <Btn>Add Task</Btn>
      </Modal>
    </NewTaskBox>
  );
};

export default NewTask;
