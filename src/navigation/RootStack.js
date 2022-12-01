import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Stacks';
import HomeTab from './HomeTab';

const Stack = createNativeStackNavigator();

const RootStack = ({ routeName }) => {

    return (
        <Stack.Navigator initialRouteName={routeName} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="Home" component={HomeTab} />
        </Stack.Navigator>
    );
}

export default RootStack;