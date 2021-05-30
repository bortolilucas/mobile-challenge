import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadingModal from './components/common/LoadingModal';
import Colors from './constants/Colors';
import Navigator from './navigation/Navigator';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

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
          <LoadingModal />
        </ReduxProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
