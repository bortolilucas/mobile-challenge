import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation/Navigator';
import { StatusBar } from 'react-native';
import Colors from './constants/Colors';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={Colors.TRANSPARENT}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <Navigator />
        </ReduxProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
