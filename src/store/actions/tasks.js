import {
  SET_TASKS, ADD_TASK, EDIT_TASK, COMPLETE_TASK, SORT_TASK, REMOVE_TASK,
} from './actionTypes';

export const setTasks = () => ({ type: SET_TASKS });

export const addTask = task => ({
  type: ADD_TASK,
  task,
});

export const editTask = task => ({
  type: EDIT_TASK,
  task,
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id,
});


export const sortTask = () => ({
  type: SORT_TASK,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id,
});
