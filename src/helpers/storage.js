import AsyncStorage from '@react-native-async-storage/async-storage';
import { REHYDRATE_ACTION } from '../store/actions/auth';

export const rehydrateRedux = () => async dispatch => {
  const auth = await AsyncStorage.getItem('auth');
  if (auth) {
    return dispatch({ type: REHYDRATE_ACTION, auth: JSON.parse(auth) });
  }
  return Promise.resolve();
};

export const saveAuthentication = async data => {
  try {
    await AsyncStorage.setItem('auth', JSON.stringify(data));
  } catch (error) {}
};
