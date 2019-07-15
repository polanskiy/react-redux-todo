import {
  SET_TASKS, ADD_TASK, EDIT_TASK, COMPLETE_TASK, SORT_TASK, REMOVE_TASK,
} from '../actions/actionTypes';

const initState = [];

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TASKS:
      const localTasks = localStorage.getItem('taskList');
      let newState = state;
      if (localTasks.indexOf('title') !== -1) {
        newState = JSON.parse(localTasks);
      }
      return [...newState];
    case ADD_TASK:
      const newTaskState = [...state, action.task];
      localStorage.setItem('taskList', JSON.stringify(newTaskState));
      return newTaskState;
    case EDIT_TASK:
      return [...state];
    case COMPLETE_TASK:
      const completeTaskList = state.map((task) => {
        if (task.id === action.id) {
          task.complete = !task.complete;
          return task;
        }
        return task;
      });
      localStorage.setItem('taskList', JSON.stringify(completeTaskList));
      return [...completeTaskList];
    case SORT_TASK:
      return [...state];
    case REMOVE_TASK:
      return [...state];

    default:
      return state;
  }
};

export { taskReducer };
