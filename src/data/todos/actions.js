import { createAction } from 'redux-actions';

export const TASKS_FETCH_REQUEST = 'todo/TASKS_FETCH_REQUEST';
export const TASKS_RECEIVED = 'todo/TASKS_RECEIVED';
export const TASKS_FETCH_FAILED = 'todo/TASKS_FETCH_FAILED';

export const tasksFetchRequest = createAction(TASKS_FETCH_REQUEST);
export const tasksReceived = createAction(TASKS_RECEIVED);
export const tasksFetchFailed = createAction(TASKS_FETCH_FAILED);
