import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import IconPressable from '../../common/IconPressable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../constants/Colors';
import { useNavigation } from '@react-navigation/core';
import Screens from '../../../constants/Screens';

const HomeHeader = () => {
  const navigation = useNavigation();

  const onAdd = () => {
    navigation.navigate(Screens.EDIT, { type: 'create' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despesas</Text>
      <IconPressable onPress={onAdd} style={styles.addButton}>
        <FontAwesome5 name="plus" color={Colors.PRIMARY} size={22} />
      </IconPressable>
    </View>
  );
};

export default HomeHeader;
