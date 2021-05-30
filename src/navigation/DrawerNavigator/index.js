import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import Screens from '../../constants/Screens';
import DrawerContent from '../DrawerContent';
import MainStackNavigator from '../MainStackNavigator';
import styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.PRIMARY,
        activeBackgroundColor: Colors.TRANSPARENT,
        inactiveBackgroundColor: Colors.TRANSPARENT,
        inactiveTintColor: Colors.PRIMARY,
        labelStyle: styles.label,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={Screens.STACK}
        component={MainStackNavigator}
        options={{
          drawerLabel: 'Início',
          drawerIcon: props => <MaterialIcons name="home" {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
