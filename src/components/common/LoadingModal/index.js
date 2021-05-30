import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Colors from '../../../constants/Colors';
import { loadingSelector } from '../../../store/selectors/ui';
import styles from './styles';

const LoadingModal = () => {
  const loading = useSelector(loadingSelector);
  const { top } = useSafeAreaInsets();

  return (
    <Modal
      visible={loading}
      statusBarTranslucent
      transparent
      animationType="none">
      <View style={[styles.container, { paddingBottom: top }]}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
