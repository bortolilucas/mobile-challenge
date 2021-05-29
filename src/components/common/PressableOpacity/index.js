import React from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Reanimated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function PressableOpacity({
  disabled,
  onPress,
  style,
  ...rest
}) {
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(
    () => ({ opacity: opacity.value }),
    [opacity],
  );

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      cancelAnimation(opacity);
      opacity.value = withTiming(0.5, {
        duration: 250,
        easing: Easing.linear,
      });
    },
    onEnd: () => {
      runOnJS(onPress)();
    },
    onFinish: () => {
      cancelAnimation(opacity);
      opacity.value = withTiming(1, { duration: 250, easing: Easing.linear });
    },
  });

  return (
    <TapGestureHandler
      onGestureEvent={onGestureEvent}
      enabled={!disabled}
      shouldCancelWhenOutside={true}>
      <Reanimated.View style={[style, animatedStyle]} {...rest} />
    </TapGestureHandler>
  );
}
