import { returnErrors, returnSuccess } from './errorActions';

import {
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  CLEAR_USERS,
  RETURN_SUCCESS,
  RETURN_FAIL,
} from './types';
import axios from 'axios';

export const fetchUsers = (role) => (dispatch) => {
  axios.get(`/api/users/${role}`).then((res) => {
    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  });
};

export const fetchUser = (role, username) => (dispatch) => {
  axios
    .get(`/api/users/${role}/${username}`)
    .then((res) => {
      dispatch({
        type: FETCH_USER,
        payload: res.data,
      });
      dispatch(returnSuccess(res.status, RETURN_SUCCESS));
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, RETURN_FAIL)
      );
    });
};

export const deleteUser = (role, username) => (dispatch) => {
  axios
    .delete(`/api/users/${role}/${username}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        payload: res.data,
      });
      dispatch(returnSuccess(res.status, RETURN_SUCCESS));
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, RETURN_FAIL)
      );
    });
};

export const clearUsers = () => (dispatch) => {
  dispatch({
    type: CLEAR_USERS,
  });
};
