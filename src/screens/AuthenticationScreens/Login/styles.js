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
    input: {
        marginTop: 17,
    },
    forgotPassword: {
        ...typography.S.medium,
        color: colors.gray[600],
        marginTop: 14,
        alignSelf: "flex-end",
        marginBottom: 33,
    },
});

export default styles;