import { fork } from 'redux-saga/effects';

import InitSaga from './InitSaga';

export default function* rootSaga() {
  yield [fork(InitSaga.watcher)];
}
