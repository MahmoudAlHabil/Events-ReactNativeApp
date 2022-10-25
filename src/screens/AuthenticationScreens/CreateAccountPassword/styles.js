import { StyleSheet } from "react-native";
import { colors, typography } from "../../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    formikContainer: {
        flex: 0.97,
    },
    passwordInput: {
        marginTop: 14,
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
})

export default styles