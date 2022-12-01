import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyEvents, MyEventScreen } from "../../screens";
import { headerOptions } from "../HomeTab";

const Stack = createNativeStackNavigator();

const MyEventsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyEvents" component={MyEvents} options={{
                ...headerOptions,
                title: 'مناسباتي',
            }} />
            <Stack.Screen name="MyEventScreen" component={MyEventScreen} options={{
                ...headerOptions,
                title: 'مناسبتي',
            }} />
        </Stack.Navigator>
    );
}

export default MyEventsStack;