import {
  GET_SAMPLE_REQUEST,
} from '../actions';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case(GET_SAMPLE_REQUEST):
      return state;
    default:
      return state;
  }
}
