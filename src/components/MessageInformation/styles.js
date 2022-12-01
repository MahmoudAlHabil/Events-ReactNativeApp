import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../utils";

const styles = ScaledSheet.create({
    container: {
        marginTop: 8,
        flexDirection: "row",
    },
    message: {
        ...typography.S.medium,
        color: colors.danger.main,
        marginStart: 8,
    },
})

export default styles;