import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import { plataforms } from '../../helpers/plataform';

export default StyleSheet.create({
  label: {
    fontSize: plataforms({ ios: 15, android: 14 }),
    fontFamily: Fonts.MEDIUM,
  },
});
