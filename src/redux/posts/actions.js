import Types from './types';

const postsFetchRequest = () => ({ type: Types.POSTS_FETCH_REQUEST });
const postsReceived = (payload) => ({ type: Types.POSTS_RECEIVED, payload });
const postsFetchFailed = (error) => ({ type: Types.POSTS_FETCH_FAILED, error });

export default {
  postsFetchRequest,
  postsReceived,
  postsFetchFailed,
};
