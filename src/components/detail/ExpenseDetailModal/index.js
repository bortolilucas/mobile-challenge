import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../constants/Colors';
import { formatPrice } from '../../../helpers/currency';
import { changeDateIntlToBr } from '../../../helpers/date';
import { isAndroid } from '../../../helpers/plataform';
import styles from './styles';

const ExpenseDetailModal = ({ item, setItemSel }) => {
  const onPressOutside = () => {
    setItemSel(null);
  };

  return (
    <Modal
      visible={!!item}
      statusBarTranslucent
      transparent
      animationType="fade">
      <View style={styles.container}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onPressOutside} />
        <View style={styles.modal}>
          <Text style={styles.name}>{item?.item}</Text>
          <Text style={styles.value}>
            {item?.value ? formatPrice(item?.value) : ''}
          </Text>
          <View style={styles.rowIcon}>
            <FontAwesome5
              name="calendar-alt"
              size={12}
              color={Colors.PLACEHOLDER}
            />
            <Text style={styles.date}>
              {item?.date ? changeDateIntlToBr(item?.date) : ''}
            </Text>
          </View>
          {!!item?.additionalInfo?.descricao && (
            <Text style={styles.descricao}>
              {item.additionalInfo.descricao}
            </Text>
          )}
          <View style={styles.closeContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.closeInnerContainer,
                { opacity: !isAndroid && pressed ? 0.5 : 1 },
              ]}
              onPress={onPressOutside}
              android_ripple={{ color: Colors.WHITE }}>
              <FontAwesome5 name="times" color={Colors.WHITE} size={16} />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExpenseDetailModal;
