import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import Screens from '../../constants/Screens';
import { formatPrice } from '../../helpers/currency';
import { changeDateIntlToBr } from '../../helpers/date';
import styles from './styles';

const ExpenseDetailScreen = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  const onPressOutside = () => {
    navigation.navigate(Screens.HOME, { preventFetching: true });
  };

  return (
    <View style={styles.container}>
      <Pressable style={StyleSheet.absoluteFill} onPress={onPressOutside} />
      <View style={styles.modal}>
        <Text style={styles.name}>{item.item}</Text>
        <Text style={styles.value}>{formatPrice(item.value)}</Text>
        <View style={styles.rowIcon}>
          <FontAwesome5
            name="calendar-alt"
            size={12}
            color={Colors.PLACEHOLDER}
          />
          <Text style={styles.date}>{changeDateIntlToBr(item.date)}</Text>
        </View>
        {!!item?.additionalInfo?.descricao && (
          <Text style={styles.descricao}>{item.additionalInfo.descricao}</Text>
        )}
        <View style={styles.closeContainer}>
          <View style={styles.closeInnerContainer}>
            <FontAwesome5 name="times" color={Colors.WHITE} size={16} />
          </View>
          <View style={StyleSheet.absoluteFill}>
            <RectButton
              rippleColor={Colors.white(0.2)}
              underlayColor={Colors.WHITE}
              onPress={onPressOutside}
              style={StyleSheet.absoluteFill}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseDetailScreen;
