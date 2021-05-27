import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}></ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
