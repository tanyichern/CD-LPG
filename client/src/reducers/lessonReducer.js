import _ from 'lodash';

import {
  FETCH_LESSONS,
  FETCH_LESSON,
  CREATE_LESSON,
  DELETE_LESSON,
  EDIT_LESSON,
  CLEAR_LESSONS,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LESSONS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case FETCH_LESSON:
      return { ...state, [action.payload._id]: action.payload.data };
    case CREATE_LESSON:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_LESSON:
      return _.omit(state, action.payload._id);
    case CLEAR_LESSONS:
      return {};
    default:
      return state;
  }
};
