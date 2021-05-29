import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import Colors from '../../../constants/Colors';
import styles from './styles';

const LoadingModal = () => {
  return (
    <Modal statusBarTranslucent transparent animationType="none">
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
