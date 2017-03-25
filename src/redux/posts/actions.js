import Types from './types';

const requestPosts = () => ({ type: Types.POSTS_REQUEST });
const receivePosts = payload => ({ type: Types.POSTS_RECEIVED, payload });
const receivePostsFailed = error => ({
  type: Types.POSTS_RECEIVED_FAILURE,
  error,
});

export default {
  requestPosts,
  receivePosts,
  receivePostsFailed,
};
