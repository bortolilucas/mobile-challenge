export const BASE_URL = 'https://sofit-mobile-challenge.herokuapp.com';

export const Endpoints = {
  EXPENSES: BASE_URL + '/expenses',
  expense: id => BASE_URL + `/expenses/${id}`,
  start: email => BASE_URL + `/start/${email}`,
};
