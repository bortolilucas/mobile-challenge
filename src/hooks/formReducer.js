export const ON_CHANGE_ACTION = 'ON_CHANGE_ACTION';

export default (state, action) => {
  switch (action.type) {
    case ON_CHANGE_ACTION:
      return { ...state, ...action.payload };
    default:
      throw new Error('No action matched');
  }
};
