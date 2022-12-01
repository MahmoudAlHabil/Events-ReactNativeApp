import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, UpdateProfileScreen } from "../../screens";
import { headerOptions } from "../HomeTab";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} options={{
                ...headerOptions,
                title: 'ملفي الشخصي',
            }}/>
            <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} options={{
                ...headerOptions,
                title: 'تعديل الملف الشخصي',
            }}/>
        </Stack.Navigator>
    );
}

export default SettingsStack;