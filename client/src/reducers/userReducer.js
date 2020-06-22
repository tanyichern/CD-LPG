import _ from 'lodash';

import {
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  CLEAR_USERS,
} from '../actions/types';

// state
// {
//   _id: {
//     rank:
//     name:
//     email:
//     unit:
//     role:
//     ...
//   },
//   _id2: {
//     rank:
//     name:
//     email:
//     unit:
//     role:
//     ...
//   }
// }

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload.data, '_id') };
    case FETCH_USER:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_USER:
      return _.omit(state, action.payload._id);
    case CLEAR_USERS:
      return {};
    default:
      return state;
  }
};
