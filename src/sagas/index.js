import { fork } from 'redux-saga/effects';

import InitSaga from './InitSaga'; // eslint-disable-line

export default function* rootSaga() {
  yield [fork(InitSaga.watcher)];
}
