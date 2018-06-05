import { call, put, takeEvery } from 'redux-saga/effects'; // eslint-disable-line

import {
  Actions as PostsActions,
  Types as PostsActionTypes
} from '../redux/Posts';
import API from '../services';

function* fetchTasks(action) {
  const response = yield call(API.fetchPosts);

  if (response.ok) {
    yield put(PostsActions.success(response.data));
  } else {
    yield put(PostsActions.failure(response));
  }
}

function* watcher() {
  yield takeEvery(PostsActionTypes.REQUEST, fetchTasks);
}

export default {
  watcher
};
