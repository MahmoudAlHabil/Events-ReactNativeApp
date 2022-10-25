import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../../utils";

const styles = ScaledSheet.create({
    container: {
    },
    title: {
        ...typography.S.medium,
        color: colors.gray[500],
        marginTop: 10,
    },
    checkmark: { 
        flexDirection: 'row',
        marginTop: 8,
    },
    checkmarkText: {
        ...typography.M.regular,
        color: colors.gray[500],
        marginStart: 12,
    },
    checkmarkTextTrue: {
        color: colors.success.main,
    },
})

export default styles;