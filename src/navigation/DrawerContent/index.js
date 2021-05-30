import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthentication } from '../../helpers/storage';
import { LOGOUT_ACTION } from '../../store/actions/auth';
import { emailSelector } from '../../store/selectors/auth';
import styles from './styles';

const signOutIcon = props => (
  <FontAwesome5
    {...props}
    style={styles.signoutIcon}
    name="sign-out-alt"
    size={22}
  />
);

const DrawerContent = props => {
  const dispatch = useDispatch();
  const email = useSelector(emailSelector);

  const onSignOut = () => {
    props.navigation.closeDrawer();
    dispatch({ type: LOGOUT_ACTION });
    clearAuthentication();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerTop}>
        <Text style={styles.greetings}>
          Olá, <Text style={styles.email}>{email}</Text>
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        onPress={onSignOut}
        label="Sair"
        icon={signOutIcon}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
