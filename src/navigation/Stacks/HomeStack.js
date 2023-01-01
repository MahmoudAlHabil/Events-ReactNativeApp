import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationsContextProvider, useAppSettingsContext, useNotificationsContext } from "../../context";
import { CreateEvent, CustomPackageScreen, Home, Notifications, OrganizerProfileScreen, OrganizersScreen, PackageDetalisScreen, PackagesScreen, PublicEventScreen, PublicEventsScreen, SubmitEventScreen } from "../../screens";
import { colors, icons } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { headerOptions } from "../HomeTab";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const HeaderLeft = () => {
    const { goBack } = useNavigation();
    const { appSettings } = useAppSettingsContext()
    return (
        <TouchableOpacity onPress={() => {
            goBack();
            appSettings.setVisibleTabBottom(true, 'createEvent')
        }} style={{ marginLeft: 20 }}>
            <Icon name='arrow-back' size={25} color='black' />
        </TouchableOpacity>
    )
}

const HomeStack = () => {

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
                <Stack.Screen name="Notifications" component={Notifications} options={{
                    ...headerOptions,
                    title: 'مناسباتي',
                }} />
                <Stack.Screen name="PublicEventScreen" component={PublicEventScreen} options={{
                    ...headerOptions,
                    title: 'مناسبة عامة',
                }} />
                <Stack.Screen name="CreateEvent" component={CreateEvent} />
                <Stack.Screen name="PackagesScreen" component={PackagesScreen} options={{
                    ...headerOptions,
                    title: 'الحزم',
                    headerLeft: HeaderLeft,
                }} />
                <Stack.Screen name="PackageDetalisScreen" component={PackageDetalisScreen} options={{
                    ...headerOptions,
                    title: 'تفاصيل الحزمة',
                    headerLeft: HeaderLeft,
                }} />
                <Stack.Screen name="CustomPackageScreen" component={CustomPackageScreen} options={{
                    ...headerOptions,
                    title: 'تخصيص حزمة',
                }} />
                <Stack.Screen name="OrganizersScreen" component={OrganizersScreen} options={{
                    ...headerOptions,
                    title: 'المنظمين',
                }} />
                <Stack.Screen name="OrganizerProfileScreen" component={OrganizerProfileScreen} options={{
                    ...headerOptions,
                    title: 'تفاصيل المنظم',
                }} />
                <Stack.Screen name="SubmitEventScreen" component={SubmitEventScreen} options={{
                    ...headerOptions,
                    title: 'تأكيد المناسبة',
                }} />
            </Stack.Navigator>
        </NotificationsContextProvider>
    );
}



export default HomeStack;