import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Sample from './sample';

export default combineReducers({
  sample: Sample,
  routing: routerReducer,
});
