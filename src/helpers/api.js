import axios from 'axios';
import { BASE_URL, Endpoints } from '../constants/api';
import { AUTHENTICATE_ACTION } from '../store/actions/auth';
import { saveAuthentication } from './storage';

const api = axios.create({ baseURL: BASE_URL });

const handleErrorResponse = error => {
  let errorResponse;
  if (error.response && error.response.data) {
    errorResponse = error.response.data;
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
      const res = await api.get(Endpoints.start(email));
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

export const getExpenses = async () => {};
