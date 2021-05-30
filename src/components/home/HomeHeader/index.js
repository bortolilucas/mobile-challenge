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

  const onAddPress = () => {
    navigation.navigate(Screens.EDIT, { type: 'create' });
  };

  const onMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <IconPressable onPress={onMenuPress} style={styles.addButton}>
          <FontAwesome5 name="bars" color={Colors.PRIMARY} size={25} />
        </IconPressable>
        <Text style={styles.title}>Despesas</Text>
      </View>
      <IconPressable onPress={onAddPress} style={styles.addButton}>
        <FontAwesome5 name="plus" color={Colors.PRIMARY} size={22} />
      </IconPressable>
    </View>
  );
};

export default HomeHeader;
