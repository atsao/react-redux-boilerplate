import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services';
import { PostsActions, PostsActionTypes } from '../data/todos';

function* fetchTasks (action) {
  const response = yield call(API.fetchPosts);

  if (response.ok) {
    yield put(PostsActions.postsReceived(response.data));
  } else {
    console.error('no');
  }
}

function * watcher () {
  yield takeEvery(PostsActionTypes.POSTS_FETCH_REQUEST, fetchTasks);
}

export default {
  watcher,
}
