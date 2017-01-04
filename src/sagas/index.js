import { fork, takeLatest } from 'redux-saga/effects';

import InitSaga from './InitSaga';

import { TodosActions } from 'data/todos';

export default function* rootSaga () {
  //   yield [
  //     fork(InitSaga.watcher, testApi),
  //   ];
  // yield put(welcomeActions.LIKES_FETCH_REQUEST);
  // yield [
  //   takeLatest(welcomeActions.LIKES_FETCH_REQUEST, InitSaga.fetchLikes, testApi),
  // ];
  // yield [
  //   fork(InitSaga),
  // ];
  yield takeLatest(TodosActions.TASKS_FETCH_REQUEST, InitSaga.fetchTasks);
}

// yield takeLatest(action.type, saga function, args like api object)
