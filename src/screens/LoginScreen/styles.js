import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { plataforms } from '../../helpers/plataform';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 25,
    paddingTop: plataforms({
      ios: 20,
      android: 15,
    }),
    paddingBottom: plataforms({
      notch: 20,
      ios: 30,
      android: 30,
    }),
  },
  containerScroll: {
    flexGrow: 1,
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: 32,
    color: Colors.PRIMARY,
    lineHeight: 32 * 1.3,
    letterSpacing: 0.5,
  },
  inputContainer: { marginTop: 30 },
  bottom: { flex: 1, justifyContent: 'flex-end' },
});
