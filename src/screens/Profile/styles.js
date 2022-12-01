import { StyleSheet } from "react-native";
import { colors, shadow, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e5e5e5',
    },
    name: {
        ...typography.L.semibold,
        color: colors.gray[700],
        marginTop: 20,
    },
    phone: {
        ...typography.M.medium,
        color: colors.gray[600],
        marginTop: 5,
    },
    headerList: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    footerList: {
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    item: {
        marginVertical: -1,
    },
    logout: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 10,
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    }
})

export default styles