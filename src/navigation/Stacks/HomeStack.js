import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { NotificationsContextProvider, useNotificationsContext } from "../../context";
import { Home, Notifications, PublicEventScreen, PublicEventsScreen } from "../../screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
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
                        headerShown: true,
                        headerRight: () => (
                            <View style={styles.headerRight} >
                                <SvgXml xml={icons.logo} />
                            </View>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity activeOpacity={0.8} style={styles.headerLeft} onPress={() => navigate('Notifications')}>
                              <Ionicons name={'notifications-outline'} size={25}
                                color={colors.primary.main}
                              />
                              {numberUnreadNotifications > 0 && <View style={styles.badge} >
                                <Text style={styles.badgeText} >{numberUnreadNotifications}</Text>
                              </View>}
                            </TouchableOpacity>
                        ),
                        title: '',
                    }} />
                <Stack.Screen name="PublicEventsScreen" component={PublicEventsScreen} options={{
                    ...headerOptions,
                    title: 'المناسبات العامة',
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

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    headerLeft: {
        paddingBottom: 0,
    },
    headerRight: {
    },
    badge: {
        position: "absolute",
        top: -1,
        left: -3,
        backgroundColor: colors.danger.main,
        borderRadius: 10,
        width: 15,
        height: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    badgeText: {
        color: colors.common.white,
        fontSize: 10,
        lineHeight: 12,
    },
});

export default HomeStack;