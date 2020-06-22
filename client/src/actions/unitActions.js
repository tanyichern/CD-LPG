import { returnErrors, returnSuccess } from './errorActions';

import {
  FETCH_UNITS,
  FETCH_UNIT,
  CREATE_UNIT,
  EDIT_UNIT,
  DELETE_UNIT,
  RETURN_FAIL,
  RETURN_SUCCESS,
  CLEAR_UNITS,
} from '../actions/types';
import axios from 'axios';

export const createUnit = (formValues) => (dispatch) => {
  axios
    .post('/api/units', formValues)
    .then((res) => {
      dispatch({
        type: CREATE_UNIT,
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

export const fetchUnits = () => (dispatch) => {
  axios.get('/api/units').then((res) => {
    dispatch({
      type: FETCH_UNITS,
      payload: res.data,
    });
  });
};

export const fetchUnit = (dbname) => (dispatch) => {
  axios
    .get(`/api/units/${dbname}`)
    .then((res) => {
      dispatch({
        type: FETCH_UNIT,
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

export const deleteUnit = (dbname) => (dispatch) => {
  axios
    .delete(`/api/units/${dbname}`)
    .then((res) => {
      dispatch({
        type: DELETE_UNIT,
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

export const editUnit = (dbname, formValues) => (dispatch) => {
  axios
    .patch(`/api/units/${dbname}`, formValues)
    .then((res) => {
      dispatch({
        type: EDIT_UNIT,
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

export const clearUnits = () => (dispatch) => {
  dispatch({
    type: CLEAR_UNITS,
  });
};
