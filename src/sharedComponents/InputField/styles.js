import { ScaledSheet } from 'react-native-size-matters';
import { colors, typography } from '../../utils';

const styles = ScaledSheet.create({
    container: {
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        width: "100%",
        borderRadius: 10,
        backgroundColor: colors.gray[100],
        paddingStart: 19,
        paddingEnd: 19,
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 14,
        textAlign: "right",
    },
    labelContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        ...typography.M.medium,
        color: colors.gray[500],
        textAlign: "left",
        lineHeight: 28,
    },
    labelIcon: {
        marginEnd: 8,
        marginStart: 4,
    },
})

export default styles;