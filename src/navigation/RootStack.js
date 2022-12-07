import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Stacks';
import HomeTab from './HomeTab';
import { AllEventsContextProvider, UserInfoContextProvider } from '../context';

const Stack = createNativeStackNavigator();

const RootStack = ({ routeName }) => {

    return (
        <UserInfoContextProvider>
            <AllEventsContextProvider>
                <Stack.Navigator initialRouteName={routeName} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                    <Stack.Screen name="Home" component={HomeTab} />
                </Stack.Navigator>
            </AllEventsContextProvider>
        </UserInfoContextProvider>
    );
}

export default RootStack;