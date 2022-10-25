import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, CreateAccount, NewPassword, ForgotPassword, VerificationCode, Onboarding, CreateAccountPassword } from '../../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeTab from '../HomeTab';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [firstLaunch, setFirstLaunch] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem("appLaunched").then((value) => {
            if (!value) {
                setFirstLaunch(true);
                AsyncStorage.setItem("appLaunched", "false");
            } else {
                setFirstLaunch(false);
            }
        })
    }, []);

    return (
        (firstLaunch !== null) ?
            <Stack.Navigator screenOptions={{ headerShown: false }}
                initialRouteName={firstLaunch ? "Onboarding" : "Login"}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="CreateAccountPassword" component={CreateAccountPassword} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="VerificationCode" component={VerificationCode} />
                <Stack.Screen name="HomeTab" component={HomeTab} />
            </Stack.Navigator>
            : null
    );
}

export default AuthStack;