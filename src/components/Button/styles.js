import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 17,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
    letterSpacing: 0.4,
  },
  activityIndicatorContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
});
