import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    action: {
        flexDirection: "row",
        marginTop: 31,
        marginBottom: -19,
        alignItems: "center",
        alignSelf: 'flex-start',
    },
    actionText: {
        ...typography.M.regular,
        color: colors.gray[600],
    },
    title: {
        ...typography.XL.bold,
        color: colors.gray[800],
        marginTop: 35,
    },
    subTitle: {
        ...typography.L.regular,
        color: colors.gray[500],
        marginBottom: 24,
    },
    highlightText: {
        color: colors.gray[800],
    },
})

export default styles;