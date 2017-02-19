import Immutable from 'seamless-immutable';
import { normalize, Schema } from 'normalizr';

import { TASKS_RECEIVED } from './actionCreators';

// Schema

export const INITIAL_STATE = Immutable([]);

const TodosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASKS_RECEIVED:
      if (!action.payload) return state;
      return action.payload;

    default: {
      return state;
    }
  }
};

export default TodosReducer;
