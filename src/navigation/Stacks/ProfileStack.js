import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../screens";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

export default SettingsStack;