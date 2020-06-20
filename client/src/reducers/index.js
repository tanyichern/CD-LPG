import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import lessonReducer from './lessonReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  lessons: lessonReducer,
  error: errorReducer,
});
