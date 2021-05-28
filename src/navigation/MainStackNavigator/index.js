import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../../constants/Screens';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../store/selectors/auth';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      ) : (
        <Stack.Screen
          name={Screens.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
