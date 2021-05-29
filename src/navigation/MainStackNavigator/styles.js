import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { plataforms } from '../../helpers/plataform';

export default StyleSheet.create({
  header: {
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.WHITE,
  },
  headerTitle: {
    color: Colors.PRIMARY,
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 17.5,
  },
  headerBackIcon: {
    marginLeft: plataforms({ ios: 12, android: 0 }),
  },
});
