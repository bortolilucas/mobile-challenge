import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { getPropsByType } from '../../../helpers/input';
import styles from './styles';

const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  containerStyle,
  error,
  ...props
}) => {
  const translateY = useSharedValue(0);
  const fontSize = useSharedValue(18);

  const containerLabelAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const labelAnimatedStyle = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
  }));

  const onChangeText = text => onChange(text, name);

  const onFocus = () => {
    fontSize.value = withDelay(100, withTiming(12, { duration: 150 }));
    translateY.value = withDelay(100, withTiming(-21, { duration: 150 }));
  };

  const onBlur = () => {
    if (!value) {
      fontSize.value = withDelay(100, withTiming(18, { duration: 150 }));
      translateY.value = withDelay(100, withTiming(0, { duration: 150 }));
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Reanimated.View
        style={[styles.containerLabel, containerLabelAnimatedStyle]}>
        <Reanimated.Text style={[styles.label, labelAnimatedStyle]}>
          {label}
        </Reanimated.Text>
      </Reanimated.View>
      <TextInput
        {...getPropsByType(type)}
        {...props}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        style={styles.input}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default React.memo(Input);
