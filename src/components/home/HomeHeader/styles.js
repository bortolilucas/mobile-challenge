import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { plataforms } from '../../../helpers/plataform';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: plataforms({
      notch: 10,
      ios: 15,
      android: 10,
    }),
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: 28,
    color: Colors.PRIMARY,
    lineHeight: 32 * 1.3,
    letterSpacing: 0.5,
  },
  addButton: {
    padding: 5,
  },
});
