export const BASE_URL = 'https://sofit-mobile-challenge.herokuapp.com';

export const Endpoints = {
  EXPENSES: '/expenses',
  expense: id => `/expenses/${id}`,
  start: email => `start/${email}`,
};
