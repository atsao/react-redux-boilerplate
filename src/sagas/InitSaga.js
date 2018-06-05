import { call, put, takeEvery } from 'redux-saga/effects'; // eslint-disable-line

import { PostsActions, PostsActionTypes } from '../redux/Posts';
import API from '../services';

function* fetchTasks(action) {
  const response = yield call(API.fetchPosts);

  if (response.ok) {
    yield put(PostsActions.receivePosts(response.data));
  } else {
    const {
      status,
      problem,
      data: { message }
    } = response;
    yield put(PostsActions.receivePostsFailed({ status, problem, message }));
  }
}

function* watcher() {
  yield takeEvery(PostsActionTypes.POSTS_REQUEST, fetchTasks);
}

export default {
  watcher
};
