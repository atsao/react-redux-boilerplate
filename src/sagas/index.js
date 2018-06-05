import { all, fork } from 'redux-saga/effects';

import InitSaga from './InitSaga'; // eslint-disable-line

export default function* rootSaga() {
  yield all([fork(InitSaga.watcher)]);
}
