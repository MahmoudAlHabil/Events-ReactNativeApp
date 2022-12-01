import { ScaledSheet } from 'react-native-size-matters';
import { colors, typography } from '../../utils';

const styles = (width) => ScaledSheet.create({
    button: {
        borderRadius: 8,
        height: 48,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },
    title: {
        ...typography.L.medium,
        color: colors.common.white,
        lineHeight: 29.5,
    },
    iconStyle: {
        width: 16,
        height: 16,
        marginTop: 3,
    }
})

export default styles;