import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { plataforms } from '../../../helpers/plataform';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: plataforms({
      notch: 8,
      ios: 15,
      android: 10,
    }),
    paddingBottom: 15,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: 25,
    paddingLeft: 20,
    color: Colors.PRIMARY,
    lineHeight: 25 * 1.2,
  },
  addButton: {
    padding: 5,
  },
});
