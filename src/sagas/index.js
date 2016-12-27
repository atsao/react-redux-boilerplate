import { fork } from 'redux-saga/effects';

import InitSaga from './InitSaga';

export default function* rootSaga () {
  // while (true) {
  //   yield [
  //     fork(InitSaga.watcher, testApi),
  //   ];
  // }
  // yield put(welcomeActions.LIKES_FETCH_REQUEST);
  // yield [
  //   takeLatest(welcomeActions.LIKES_FETCH_REQUEST, InitSaga.fetchLikes, testApi),
  // ];
  yield [
    fork(InitSaga),
  ];
}

// yield takeLatest(action.type, saga function, args like api object)
