import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import Screens from '../../constants/Screens';
import ExpenseDetailScreen from '../../screens/ExpenseDetailScreen';
import ExpenseEditScreen from '../../screens/ExpenseEditScreen';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { isAuthSelector } from '../../store/selectors/auth';
import styles from './styles';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Stack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <FontAwesome5
            name="arrow-left"
            color={Colors.PRIMARY}
            size={22}
            style={styles.headerBackIcon}
          />
        ),
      }}>
      {isAuth ? (
        <>
          <Stack.Screen
            name={Screens.HOME}
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.EDIT}
            component={ExpenseEditScreen}
            options={TransitionPresets.ModalTransition}
          />
          <Stack.Screen
            name={Screens.DETAIL}
            component={ExpenseDetailScreen}
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: Colors.TRANSPARENT },
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.7],
                    extrapolate: 'clamp',
                  }),
                },
              }),
            }}
          />
        </>
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
