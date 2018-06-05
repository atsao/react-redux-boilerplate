import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    request: null,
    success: ['models'],
    failure: ['error']
  },
  {
    prefix: 'POSTS_'
  }
);

export { Creators, Types };
export default { Creators, Types };
