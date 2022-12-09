import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateEvent, CustomPackageScreen, OrganizerProfileScreen, OrganizersScreen, PackageDetalisScreen, PackagesScreen, SubmitEventScreen } from "../../screens";
import { headerOptions } from "../HomeTab";

const Stack = createNativeStackNavigator();

const CreateEventStack = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
            <Stack.Screen name="PackagesScreen" component={PackagesScreen} options={{
                ...headerOptions,
                title: 'الحزم',
            }} />
            <Stack.Screen name="PackageDetalisScreen" component={PackageDetalisScreen} options={{
                ...headerOptions,
                title: 'تفاصيل الحزمة',
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
    );
}

export default CreateEventStack;