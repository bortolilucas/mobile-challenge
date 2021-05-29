import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { InputTypes } from '../../../constants/input';
import styles from './styles';
import TextInputMask from 'react-native-text-input-mask';
import CurrencyInput from 'react-native-currency-input';

const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  containerStyle,
  error,
  inputStyle,
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

  let Component, propsByType;
  switch (type) {
    case InputTypes.EMAIL:
      propsByType = {
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
        autoCompleteType: 'email',
        autoCapitalize: 'none',
        onChangeText,
        style: [styles.input, inputStyle],
      };
      Component = TextInput;
      break;
    case InputTypes.CURRENCY:
      propsByType = {
        prefix: 'R$',
        minValue: 0,
        precision: 2,
        delimiter: '.',
        separator: ',',
        onChangeValue: onChangeText,
        style: [styles.input, inputStyle],
      };
      Component = CurrencyInput;
      break;
    case InputTypes.DATE:
      propsByType = {
        keyboardType: 'number-pad',
        mask: '[00]/[00]/[0000]',
        onChangeText,
        style: [styles.input, inputStyle],
      };
      Component = TextInputMask;
      break;
    case InputTypes.TEXTAREA:
      propsByType = {
        onChangeText,
        style: [styles.input, styles.textarea, inputStyle],
      };
      Component = TextInput;
      break;
    default:
      Component = TextInput;
      propsByType = { onChangeText, style: styles.input };
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Reanimated.View
        style={[styles.containerLabel, containerLabelAnimatedStyle]}>
        <Reanimated.Text style={[styles.label, labelAnimatedStyle]}>
          {label}
        </Reanimated.Text>
      </Reanimated.View>
      <Component
        {...propsByType}
        {...props}
        value={value}
        onFocus={onFocus}
        numberOfLines={1}
        onBlur={onBlur}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default React.memo(Input);
