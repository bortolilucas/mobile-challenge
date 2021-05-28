import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/Colors';
import Navigator from './navigation/Navigator';
import ReduxProvider from './store/ReduxProvider';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={Colors.TRANSPARENT}
        barStyle="dark-content"
      />
      <SafeAreaProvider>
        <ReduxProvider>
          <Navigator />
        </ReduxProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
