import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.SEMI_BOLD,
    color: Colors.LIGHT_TEXT,
    fontSize: 17,
    textAlign: 'center',
  },
});
