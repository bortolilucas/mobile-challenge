import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { isFalse } from './utils';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isTablet = DeviceInfo.isTablet();
export const hasNotch = DeviceInfo.hasNotch();

export const plataforms = ({
  android,
  ios,
  tablet,
  tabletIos,
  tabletNotch,
  tabletAndroid,
  defaultValue,
  notch,
}) => {
  if (hasNotch) {
    if (tablet && !isFalse(tabletNotch)) return tabletNotch;
    if (!isFalse(notch)) return notch;
  }
  if (tablet) {
    if (isIos && !isFalse(tabletIos)) return tabletIos;
    if (isAndroid && !isFalse(tabletAndroid)) return tabletAndroid;
    if (tablet) return tablet;
  }
  if (isIos && !isFalse(ios)) return ios;
  if (isAndroid && !isFalse(android)) return android;
  return defaultValue;
};
