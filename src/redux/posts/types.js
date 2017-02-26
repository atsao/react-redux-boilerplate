import { createTypes } from 'reduxsauce';

export default createTypes(`
  POSTS_FETCH_REQUEST
  POSTS_RECEIVED
  POSTS_FETCH_FAILED
`, {
  prefix: 'posts/',
});
