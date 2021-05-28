import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import styles from './styles';

const Button = ({ text, onPress, loading = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={StyleSheet.absoluteFill}>
        <RectButton
          enabled={!loading}
          underlayColor={Colors.WHITE}
          activeOpacity={0.15}
          rippleColor={Colors.white(0.2)}
          onPress={onPress}
          style={StyleSheet.absoluteFill}
        />
      </View>
      {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="small" color={Colors.WHITE} />
        </View>
      )}
    </View>
  );
};

export default Button;
