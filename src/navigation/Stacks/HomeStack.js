import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationsContextProvider, useNotificationsContext } from "../../context";
import { Home, Notifications, PublicEventScreen, PublicEventsScreen } from "../../screens";
import { colors, icons } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { headerOptions } from "../HomeTab";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    
  const { navigate } = useNavigation()
    const { notifications } = useNotificationsContext()
    const numberUnreadNotifications = notifications.filter(notification => notification.touched === false).length

    return (
        <NotificationsContextProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}
                    options={{
                      title: '',
                    }} />
                <Stack.Screen name="PublicEventsScreen" component={PublicEventsScreen} options={{
                    ...headerOptions,
                    title: 'المناسبات القادمة',
                }} />
                <Stack.Screen name="Notifications" component={Notifications}  options={{
                    ...headerOptions,
                    title: 'مناسباتي',
                }}/>
                <Stack.Screen name="PublicEventScreen" component={PublicEventScreen}  options={{
                    ...headerOptions,
                    title: 'مناسبة عامة',
                }}/>
            </Stack.Navigator>
        </NotificationsContextProvider>
    );
}



export default HomeStack;