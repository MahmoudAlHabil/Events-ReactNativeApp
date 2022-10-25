import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        alignSelf: "center",
        // position: "absolute",
        // bottom: 35,
        // marginTop: 50,
    },
    headerText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    smallLine: {
        backgroundColor: colors.gray[300],
        height: 1,
        width: 12,
    },
    loginText: {
        ...typography.M.medium,
        color: colors.gray[600],
        marginHorizontal: 8,
    },
    socialLogin: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 42,
    },
    footerText: {
        flexDirection: "row",
    },
    questionText: {
        ...typography.L.regular,
        color: colors.gray[800],
    },
    actionText: {
        ...typography.L.medium,
        color: colors.secondary.dark,
        textDecorationLine: "underline",
        textDecorationColor: colors.secondary.dark,
    },
    social: {
        marginHorizontal: 12,
    },
})

export default styles;