import { returnErrors, returnSuccess } from './errorActions';

import {
  FETCH_UNITS,
  FETCH_UNIT,
  CREATE_UNIT,
  EDIT_UNIT,
  DELETE_UNIT,
  RETURN_FAIL,
  RETURN_SUCCESS,
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

export const fetchUnits = () => async (dispatch) => {
  const response = await axios.get('/api/units');
  dispatch({
    type: FETCH_UNITS,
    payload: response.data,
  });
};

export const fetchUnit = (dbname) => async (dispatch) => {
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

export const deleteUnit = (dbname) => async (dispatch) => {
  console.log(dbname);
  axios
    .delete(`/api/units/${dbname}`)
    .then((res) => {
      dispatch({
        type: DELETE_UNIT,
        payload: dbname,
      });
      dispatch(returnSuccess(res.status, RETURN_SUCCESS));
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, RETURN_FAIL)
      );
    });
};

export const editUnit = (dbname, formValues) => async (dispatch) => {
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
