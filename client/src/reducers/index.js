import { combineReducers } from 'redux';

import authReducer from './authReducer';
import lessonReducer from './lessonReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  lessons: lessonReducer,
  error: errorReducer,
});
