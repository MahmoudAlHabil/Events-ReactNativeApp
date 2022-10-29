import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...typography.XL.bold,
        color: colors.gray[800],
        marginTop: 35,
    },
    titleWithAction: {
        marginTop: 16,
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