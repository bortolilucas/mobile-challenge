import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { plataforms } from '../../helpers/plataform';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    borderColor: Colors.PLACEHOLDER,
    borderBottomWidth: 2,
    height: plataforms({ ios: 45, android: 50 }),
    fontFamily: Fonts.MEDIUM,
    fontSize: 17.5,
    color: Colors.LIGHT_TEXT,
    letterSpacing: 0.4,
    paddingVertical: 0,
    paddingLeft: 0,
  },
  containerLabel: {
    position: 'absolute',
    top: '23%',
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    color: Colors.PLACEHOLDER,
    letterSpacing: 0.4,
  },
  error: {
    fontFamily: Fonts.MEDIUM,
    color: Colors.ERROR,
    letterSpacing: 0.4,
    fontSize: 15,
    marginTop: 5,
  },
});
