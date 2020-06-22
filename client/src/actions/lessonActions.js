import { returnErrors, returnSuccess } from './errorActions';

import {
  FETCH_LESSONS,
  FETCH_LESSON,
  CREATE_LESSON,
  DELETE_LESSON,
  EDIT_LESSON,
  CLEAR_LESSONS,
  RETURN_SUCCESS,
  RETURN_FAIL,
} from '../actions/types';
import axios from 'axios';

export const createLesson = (formValues) => (dispatch) => {
  axios
    .post('/api/lessons', formValues)
    .then((res) => {
      dispatch({
        type: CREATE_LESSON,
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

export const fetchLessons = () => (dispatch) => {
  axios.get('/api/lessons').then((res) => {
    dispatch({
      type: FETCH_LESSONS,
      payload: res.data,
    });
  });
};

export const fetchLesson = (id) => (dispatch) => {
  axios
    .get(`/api/lessons/${id}`)
    .then((res) => {
      dispatch({
        type: FETCH_LESSON,
        payload: res.data,
      });
      // dispatch(returnSuccess(res.status, RETURN_SUCCESS));
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, RETURN_FAIL)
      );
    });
};

export const deleteLesson = (id) => (dispatch) => {
  axios
    .delete(`/api/lessons/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LESSON,
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

export const editLesson = (id, formValues) => (dispatch) => {
  axios
    .patch(`/api/lessons/${id}`, formValues)
    .then((res) => {
      dispatch({
        type: EDIT_LESSON,
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

export const clearLessons = () => (dispatch) => {
  dispatch({
    type: CLEAR_LESSONS,
  });
};
