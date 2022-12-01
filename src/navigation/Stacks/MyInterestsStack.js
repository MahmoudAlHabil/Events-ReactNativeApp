import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyInterests, PublicEventScreen } from "../../screens";
import { headerOptions } from "../HomeTab";

const Stack = createNativeStackNavigator();

const MyInterestsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyInterests" component={MyInterests} options={{
                ...headerOptions,
                title: 'اهتماماتي',
            }} />
            <Stack.Screen name="PublicEventScreen" component={PublicEventScreen}  options={{
                ...headerOptions,
                title: 'مناسبة عامة',
            }}/>
        </Stack.Navigator>
    );
}

export default MyInterestsStack;