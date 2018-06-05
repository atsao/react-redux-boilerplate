import updateImmutable from 'immutability-helper';
import { createReducer } from 'reduxsauce';

import { Types } from './actions';

export const INITIAL_STATE = {
  allIds: [],
  byId: {},
  error: null
};

const normalize = list =>
  list.reduce((acc, item) => {
    const { id } = item;

    if (!acc[id]) {
      acc[id] = item;
    }

    return acc;
  }, {});

export const reset = state => INITIAL_STATE;

export const success = (state, { models }) =>
  updateImmutable(state, {
    allIds: {
      $set: models.map(item => item.id)
    },
    byId: {
      $set: normalize(models)
    }
  });

export const HANDLERS = {
  [Types.REQUEST]: reset,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: reset
};

export default createReducer(INITIAL_STATE, HANDLERS);
