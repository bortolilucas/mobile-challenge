import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default StyleSheet.create({
  containerTop: { paddingTop: 10, paddingBottom: 20, paddingHorizontal: 20 },
  greetings: { fontFamily: Fonts.MEDIUM, color: Colors.TEXT, fontSize: 14 },
  email: { color: Colors.PRIMARY, fontFamily: Fonts.SEMI_BOLD },
  signoutIcon: { marginLeft: 3 },
});
