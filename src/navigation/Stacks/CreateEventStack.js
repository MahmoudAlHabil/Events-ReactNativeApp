import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateEvent } from "../../screens";

const Stack = createNativeStackNavigator();

const CreateEventStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
        </Stack.Navigator>
    );
}

export default CreateEventStack;