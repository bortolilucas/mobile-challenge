import { StyleSheet } from 'react-native';
import { generateShadow } from 'react-native-shadow-generator';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black(0.7),
  },
  modal: {
    ...generateShadow(10),
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  descricao: {
    color: Colors.TEXT,
    fontSize: 13,
    fontFamily: Fonts.MEDIUM,
    marginTop: 12,
  },
  closeContainer: {
    position: 'absolute',
    zIndex: 1,
    top: -10,
    right: -5,
    borderRadius: 32 / 2,
    width: 32,
    height: 32,
    overflow: 'hidden',
    backgroundColor: Colors.PRIMARY,
  },
  closeInnerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
});
