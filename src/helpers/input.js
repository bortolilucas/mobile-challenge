import { InputTypes } from '../constants/input';

export const getPropsByType = type => {
  switch (type) {
    case InputTypes.EMAIL:
      return {
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
        autoCompleteType: 'email',
        autoCapitalize: 'none',
      };
    default:
      return {};
  }
};
