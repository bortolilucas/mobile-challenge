import AsyncStorage from '@react-native-async-storage/async-storage';
import { REHYDRATE_ACTION } from '../store/actions/auth';

export const rehydrateRedux = () => async dispatch => {
  const auth = await AsyncStorage.getItem('auth');
  if (auth) {
    const parsed = JSON.parse(auth);
    dispatch({ type: REHYDRATE_ACTION, auth: parsed });
    return Promise.resolve(parsed);
  }
  return Promise.resolve(null);
};

export const saveAuthentication = async data => {
  try {
    await AsyncStorage.setItem('auth', JSON.stringify(data));
  } catch (error) {}
};

export const clearAuthentication = async () => {
  try {
    await AsyncStorage.removeItem('auth');
  } catch (error) {}
};
