import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
  const token = getState().auth.token;

  if (token) {
    // user loading
    dispatch({ type: USER_LOADING });
    axios
      .get('/api/auth/user', tokenConfig(token))
      .then((res) =>
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  }
};

// register user
export const register = ({ rank, name, email, password, unit, role }) => (
  dispatch
) => {
  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // request body
  const body = JSON.stringify({ rank, name, email, password, unit, role });
  axios
    .post('/api/users', body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// login user
export const login = ({ email, password }) => (dispatch) => {
  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/api/auth', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// setup config/headers and token
export const tokenConfig = (token) => {
  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // if token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
