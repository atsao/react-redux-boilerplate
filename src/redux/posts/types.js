import { createTypes } from 'reduxsauce';

export default createTypes(`
  POSTS_REQUEST
  POSTS_RECEIVED
  POSTS_RECEIVED_FAILURE
`, {
  prefix: 'posts/',
});
