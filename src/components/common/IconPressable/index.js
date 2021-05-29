import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
import { isAndroid } from '../../../helpers/plataform';
import PressableOpacity from '../PressableOpacity';

const IconPressable = ({ children, style, ...props }) => {
  if (isAndroid) {
    return (
      <BorderlessButton rippleColor={Colors.PLACEHOLDER} {...props}>
        <View style={style}>{children}</View>
      </BorderlessButton>
    );
  }
  return (
    <PressableOpacity {...props} style={style}>
      {children}
    </PressableOpacity>
  );
};

export default IconPressable;
