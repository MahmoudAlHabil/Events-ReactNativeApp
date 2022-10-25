import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyEvents } from "../../screens";

const Stack = createNativeStackNavigator();

const MyEventsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyEvents" component={MyEvents} />
        </Stack.Navigator>
    );
}

export default MyEventsStack;