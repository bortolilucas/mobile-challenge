import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import IconPressable from '../../common/IconPressable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../constants/Colors';

const HomeHeader = () => {
  const onAdd = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despesas</Text>
      <IconPressable onPress={onAdd} style={styles.addButton}>
        <FontAwesome5 name="plus" color={Colors.TEXT} size={22} />
      </IconPressable>
    </View>
  );
};

export default HomeHeader;
