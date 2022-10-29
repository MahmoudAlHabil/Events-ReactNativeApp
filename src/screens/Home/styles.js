import { StyleSheet } from "react-native";
import { colors, shadow, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    logo: {
        alignSelf: 'center',
        marginVertical: 16,
    },
    welcomeText: {
        ...typography.S.semibold,
        color: colors.gray[500],
        marginVertical: 8,
    },
    name: {
        color: colors.gray[800],
    },
    wrapper: {
        height: '20%',
        backgroundColor: colors.common.white,
        borderRadius: 10,
        overflow: "hidden",
        ...shadow,
        elevation: 2,
    },
    slide: {
        width: '100%',
        height: '100%',
    },
})

export default styles;