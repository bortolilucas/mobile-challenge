import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { plataforms } from '../../../helpers/plataform';
import styles from './styles';

const TOP_SPACE = plataforms({ notch: 10, ios: 15, android: 10 }) + 30;

const EmptyList = ({ text }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: top + TOP_SPACE,
        },
      ]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default EmptyList;
