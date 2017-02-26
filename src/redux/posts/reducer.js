import Immutable from 'seamless-immutable';
import { normalize, schema } from 'normalizr';
import { createReducer } from 'reduxsauce';

import Types from './types';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  user: user,
});
const post = new schema.Entity('posts', {
  author: user,
  comments: [ comment ],
});

export const INITIAL_STATE = Immutable({
  posts: {
    postsById: {},
    postsList: [],
  },
  users: {
    usersById: {},
    usersList: [],
  },
  comments: {
    commentsById: {},
    commentsList: [],
  },
});

export const reset = state => INITIAL_STATE;

export const receive = (state, action) => {
  const { entities: { posts, users }, result } = normalize(action.payload, [ post ]);

  return state
    .setIn(['posts', 'postsList'], result)
    .setIn(['posts', 'postsById'], posts)
    .setIn(['users', 'usersById'], users)
    .setIn(['users', 'usersList'], Object.keys(users));
}

export const HANDLERS = {
  [Types.POSTS_REQUEST]: reset,
  [Types.POSTS_FETCH_REQUEST_FAILED]: reset,
  [Types.POSTS_RECEIVED]: receive,
}

export default createReducer(INITIAL_STATE, HANDLERS);
