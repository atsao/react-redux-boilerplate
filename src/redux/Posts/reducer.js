import Immutable from 'seamless-immutable';
import { normalize, schema } from 'normalizr';
import { createReducer } from 'reduxsauce';

import Types from './types';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  user: user
});
const post = new schema.Entity('posts', {
  author: user,
  comments: [comment]
});

export const INITIAL_STATE = Immutable({
  posts: {
    allIds: [],
    byId: {}
  },
  users: {
    allIds: [],
    byId: {}
  },
  comments: {
    allIds: [],
    byId: {}
  }
});

export const reset = state => INITIAL_STATE;

export const receive = (state, action) => {
  const {
    entities: { posts, users },
    result
  } = normalize(action.payload, [post]);

  return state
    .setIn(['posts', 'allIds'], result)
    .setIn(['posts', 'byId'], posts)
    .setIn(['users', 'byId'], users)
    .setIn(['users', 'allIds'], Object.keys(users));
};

export const HANDLERS = {
  [Types.POSTS_REQUEST]: reset,
  [Types.POSTS_RECEIVED]: receive,
  [Types.POSTS_RECEIVED_FAILURE]: reset
};

export default createReducer(INITIAL_STATE, HANDLERS);
