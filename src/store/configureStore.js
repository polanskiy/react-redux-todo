import { createStore, combineReducers } from 'redux';
import { taskReducer } from './reducers/task_reducer';

export const rootReducer = combineReducers({
  tasks: taskReducer,
});

export const store = createStore(rootReducer);
