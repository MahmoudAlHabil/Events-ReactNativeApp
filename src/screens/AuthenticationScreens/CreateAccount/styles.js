import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    formikContainer: {
        flex: 0.97,
    },
    policyTermContainer: {
        flexDirection: "row",
        marginTop: 24,
        marginBottom: 8,
    },
    originalText: {
        ...typography.S.regular,
        color: colors.gray[600],
    },
    highlightText: {
        ...typography.S.regular,
        color: colors.info.main,
    },
    passwordInput: {
        marginBottom: 12,
    },
    input: {
        marginTop: 16,
    },
    footerStyle: {
        marginTop: 35,
    },
    dropDown: {
        marginTop: 16,
    },
})

export default styles;