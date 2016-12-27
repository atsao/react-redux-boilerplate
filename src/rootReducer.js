import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { TodosReducer } from './data/todos';
// import ui from './uiReducer';

export default combineReducers({
  routing: routerReducer,
  todos: TodosReducer,
  // ui,
});
