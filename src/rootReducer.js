import { combineReducers } from 'redux-seamless-immutable';
import { routerReducer } from 'react-router-redux';

import { PostsReducer } from './redux/Posts';

export default combineReducers({
  routing: routerReducer,
  data: PostsReducer
});
