import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorite } from "../../screens";

const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Favorite" component={Favorite} />
        </Stack.Navigator>
    );
}

export default FavoriteStack;