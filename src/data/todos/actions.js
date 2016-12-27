import { createAction } from 'redux-actions';

export const TASKS_FETCH_REQUEST = 'welcome/TASKS_FETCH_REQUEST';
export const TASKS_RECEIVED = 'welcome/TASKS_RECEIVED';
export const TASKS_FETCH_FAILED = 'welcome/TASKS_FETCH_FAILED';

export const tasksFetchRequest = createAction(TASKS_FETCH_REQUEST);
export const tasksReceived = createAction(TASKS_RECEIVED);
export const tasksFetchFailed = createAction(TASKS_FETCH_FAILED);
