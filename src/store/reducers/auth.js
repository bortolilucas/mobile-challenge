import {
  AUTHENTICATE_ACTION,
  LOGOUT_ACTION,
  REHYDRATE_ACTION,
} from '../actions/auth';

const initialState = {
  _id: '',
  email: '',
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_ACTION:
      return {
        ...state,
        _id: action._id,
        email: action.email,
        token: action.token,
      };
    case REHYDRATE_ACTION:
      return {
        ...state,
        ...action.auth,
      };
    case LOGOUT_ACTION:
      return { ...initialState };
    default:
      return state;
  }
};
