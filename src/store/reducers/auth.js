import { AUTHENTICATE_ACTION } from '../actions/auth';

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
        token: action.email,
      };
    default:
      return state;
  }
};
