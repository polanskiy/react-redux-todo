import {
  SET_TASKS, ADD_TASK, EDIT_TASK, COMPLETE_TASK, SORT_TASK, REMOVE_TASK,
} from '../actions/actionTypes';

const initState = [];

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TASKS:
      const localTasks = localStorage.getItem('taskList');
      let newState = state;
      if (localTasks && localTasks.indexOf('title') !== -1) {
        newState = JSON.parse(localTasks);
      }
      return newState;

    case ADD_TASK:
      const newTaskState = [...state, action.task];
      localStorage.setItem('taskList', JSON.stringify(newTaskState));
      return newTaskState;

    case EDIT_TASK:
      const editTaskList = state.map((task) => {
        if (task.id === action.task.id) {
          task.title = action.task.title;
          task.description = action.task.description;
          return task;
        }
        return task;
      });
      localStorage.setItem('taskList', JSON.stringify(editTaskList));
      return editTaskList;

    case COMPLETE_TASK:
      const completeTaskList = state.map((task) => {
        if (task.id === action.id) {
          task.complete = !task.complete;
          return task;
        }
        return task;
      });
      localStorage.setItem('taskList', JSON.stringify(completeTaskList));
      return completeTaskList;

    case SORT_TASK:
      if (action.sort) {
        state.sort((a, b) => ((a.title > b.title) ? 1 : -1));
      } else {
        state.reverse();
      }
      return [...state];

    case REMOVE_TASK:
      const removeTaskList = state.filter(task => task.id !== action.id);
      localStorage.setItem('taskList', JSON.stringify(removeTaskList));
      return removeTaskList;

    default:
      return state;
  }
};

export { taskReducer };
