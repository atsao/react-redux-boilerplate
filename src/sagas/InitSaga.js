import { call, put, takeEvery } from 'redux-saga/effects';

import { TodosActions } from 'data/todos';

export const API = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(['Clean car', 'Send letter', 'Take out trash']);
    }, 1000);
  });
}

export function* fetchTasks (action) {
  try {
    const tasks = yield call(API);
    yield put(TodosActions.tasksReceived(tasks));
  } catch (error) {
    yield put(TodosActions.tasksFetchFailed);
  }
}

export function* watcher () {
  yield takeEvery(TodosActions.TASKS_FETCH_REQUEST, fetchTasks);
}

export default watcher;
