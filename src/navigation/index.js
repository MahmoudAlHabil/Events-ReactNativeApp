import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default AppContainer;