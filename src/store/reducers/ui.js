import { LOADING_ACTION } from '../actions/ui';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ACTION:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};
