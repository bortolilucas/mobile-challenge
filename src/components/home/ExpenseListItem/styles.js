import { StyleSheet } from 'react-native';
import { generateShadow } from 'react-native-shadow-generator';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

export default StyleSheet.create({
  container: {
    ...generateShadow(3),
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    marginVertical: 8,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  name: {
    color: Colors.TEXT,
    fontSize: 15,
    fontFamily: Fonts.MEDIUM,
  },
  value: {
    color: Colors.PRIMARY,
    fontSize: 14.5,
    fontFamily: Fonts.BOLD,
    marginTop: 2,
  },
  rowIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 1,
  },
  date: {
    color: Colors.PLACEHOLDER,
    fontSize: 13,
    fontFamily: Fonts.MEDIUM,
    paddingLeft: 5,
  },
  left: { flex: 1 },
  right: { justifyContent: 'space-between' },
  icon: { padding: 4 },
});
