import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { PostsReducer } from './redux/Posts';

export default combineReducers({
  routing: routerReducer,
  posts: PostsReducer
});
