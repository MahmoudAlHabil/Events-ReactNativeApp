import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationsContextProvider } from "../../context";
import { Notifications } from "../../screens";

const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
    return (
        <NotificationsContextProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
        </NotificationsContextProvider>
    );
}

export default FavoriteStack;