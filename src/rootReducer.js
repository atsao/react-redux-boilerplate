import { combineReducers, routerReducer } from 'redux-seamless-immutable';

import { PostsReducer } from './redux/posts';

export default combineReducers({
  routing: routerReducer,
  data: PostsReducer,
});
