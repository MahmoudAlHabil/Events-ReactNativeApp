import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContainer = () => {
  const [accessToken, setAccessToken] = useState('No token');
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((value) => {
      setAccessToken(value)
    })
  }, [])

  return (
    (accessToken !== 'No token') ?
      <NavigationContainer>
        <RootStack routeName={accessToken ? 'Home' : 'AuthStack'} />
      </NavigationContainer>
      : null
  );
}

export default AppContainer;