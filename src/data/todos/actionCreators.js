// import { createAction } from 'redux-actions';
import { createActions } from 'reduxsauce';

import Types from './actionTypes';

const postsFetchRequest = () => ({ type: Types.POSTS_FETCH_REQUEST });
const postsReceived = (payload) => ({ type: Types.POSTS_RECEIVED, payload });
const postsFetchFailed = (error) => ({ type: Types.POSTS_FETCH_FAILED, error });

const { Creators } = createActions({
  postsFetchRequest,
  postsReceived,
  postsFetchFailed,
});

export default Creators;
