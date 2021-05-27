export const BASE_API_URL = 'sofit-mobile-challenge.herokuapp.com';

export const Endpoints = {
  EXPENSES: '/expenses',
  expense: id => `/expenses/${id}`,
  start: email => `start/${email}`,
};
