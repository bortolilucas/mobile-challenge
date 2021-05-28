import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStackNavigator from '../MainStackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
