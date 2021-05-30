import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { plataforms } from '../../helpers/plataform';

export default StyleSheet.create({
  scrollview: { backgroundColor: Colors.BACKGROUND },
  scrollviewContainer: { flexGrow: 1, backgroundColor: Colors.backgroundColor },
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 25,
    paddingBottom: plataforms({
      notch: 15,
      ios: 25,
      android: 25,
    }),
  },
  bottom: { flex: 1, justifyContent: 'flex-end' },
  input: { fontSize: 16.5 },
});
