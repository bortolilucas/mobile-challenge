import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { rehydrateRedux } from '../../helpers/storage';
import { loadingAction } from '../../store/actions/ui';
import DrawerNavigator from '../DrawerNavigator';

const Navigator = () => {
  const [ready, setReady] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadingAction(true));
    dispatch(rehydrateRedux()).then(res => {
      if (!res || !res.token) {
        dispatch(loadingAction(false));
      }
      setReady(true);
    });
  }, [dispatch]);

  if (!ready) {
    return null;
  }
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
