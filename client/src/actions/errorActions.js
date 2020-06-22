import { GET_ERRORS, CLEAR_ERRORS, RETURN_SUCCESS } from './types';

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const returnSuccess = (status, id = null) => {
  return {
    type: RETURN_SUCCESS,
    payload: { status, id },
  };
};
