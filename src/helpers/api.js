import axios from 'axios';
import { Alert } from 'react-native';
import { Endpoints } from '../constants/api';
import { AUTHENTICATE_ACTION, LOGOUT_ACTION } from '../store/actions/auth';
import { clearAuthentication, saveAuthentication } from './storage';

const handleErrorResponse = (error, dispatch) => {
  let errorResponse;
  if (error.response && error.response.data) {
    errorResponse = error.response.data;
    if (
      dispatch &&
      errorResponse.statusCode === 401 &&
      errorResponse.error === 'Unauthorized'
    ) {
      Alert.alert('Atenção', 'Token expirado. Por favor, faça login novamente');
      clearAuthentication();
      dispatch({ type: LOGOUT_ACTION });
    }
  } else if (error.request) {
    errorResponse = error.request.message || error.request.statusText;
  } else {
    errorResponse = error.message;
  }
  return Promise.reject(errorResponse);
};

export const authenticate =
  ({ email }) =>
  async dispatch => {
    try {
      const res = await axios.get(Endpoints.start(email));
      if (res?.data?.token) {
        dispatch({ type: AUTHENTICATE_ACTION, ...res.data });
        saveAuthentication(res.data);
        return Promise.resolve(res.data);
      }
      return handleErrorResponse(res.data);
    } catch (error) {
      return handleErrorResponse(error);
    }
  };

export const getExpenses =
  ({ page, perPage = 15 }) =>
  async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const res = await axios.get(Endpoints.EXPENSES, {
        params: { page, perPage },
        headers: { Authorization: `Bearer ${token}` },
      });
      return Promise.resolve(res.data);
    } catch (error) {
      return handleErrorResponse(error, dispatch);
    }
  };
