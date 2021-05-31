import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constants/Colors';
import { formatPrice } from '../../../helpers/currency';
import { changeDateIntlToBr } from '../../../helpers/date';
import IconPressable from '../../common/IconPressable';
import styles from './styles';

const ExpenseListItem = ({ item, onEdit, onPress, onDelete }) => {
  const handleEdit = () => onEdit(item);

  const handleDelete = () => onDelete(item);

  const handlePress = () => onPress(item);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.left}>
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
        </View>
        <View style={StyleSheet.absoluteFill}>
          <RectButton onPress={handlePress} style={StyleSheet.absoluteFill} />
        </View>
        <View style={styles.right}>
          <IconPressable style={styles.icon} onPress={handleEdit}>
            <MaterialIcons name="edit" color={Colors.PRIMARY} size={20} />
          </IconPressable>
          <IconPressable style={styles.icon} onPress={handleDelete}>
            <Ionicons name="trash" color={Colors.PRIMARY} size={20} />
          </IconPressable>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ExpenseListItem);
