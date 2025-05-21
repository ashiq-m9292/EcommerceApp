import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/Navigation/Routes';


const App = () => {
  return (
    <GestureHandlerRootView>
      <Routes />
    </GestureHandlerRootView>
  );
}

export default App;
