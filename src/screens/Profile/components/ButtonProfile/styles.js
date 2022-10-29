import { StyleSheet } from "react-native";
import { colors, shadow, typography } from "../../../../utils";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 75,
        borderWidth: 1,
        borderColor: colors.gray[300],
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        ...shadow,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
    text: {
        ...typography.M.regular,
        color: colors.gray[500],
        flex: 1,
        textAlign: 'left',
        marginLeft: 16,
        lineHeight: 35
    }
})

export default styles