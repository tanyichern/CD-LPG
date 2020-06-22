import _ from 'lodash';

import {
  FETCH_UNITS,
  FETCH_UNIT,
  CREATE_UNIT,
  EDIT_UNIT,
  DELETE_UNIT,
  CLEAR_UNITS,
} from '../actions/types';

// state
// {
//   _id: {
//     name:
//     dbname:
//     users:
//     lessons:
//     ...
//   },
//   _id2: {
//     name:
//     dbname:
//     users:
//     lessons:
//     ...
//   }
// }

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNITS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case FETCH_UNIT:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_UNIT:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_UNIT:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_UNIT:
      return _.omit(state, action.payload._id);
    case CLEAR_UNITS:
      return {};
    default:
      return state;
  }
};
