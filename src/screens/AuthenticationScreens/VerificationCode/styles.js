import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    question: {
        flexDirection: "row",
        marginTop: 13,
        marginBottom: 120,
    },
    resendCode: {
        ...typography.M.regular,
        color: colors.gray[600],
    },
    timer: {
        ...typography.M.regular,
        color: colors.info.main,
    },
})

export default styles;