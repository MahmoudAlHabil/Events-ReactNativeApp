import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../utils/Colors';

const styles = ScaledSheet.create({
    button: {
        borderRadius: 10,
        height: 48,
        width: 151,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 18,
        color: Colors.white,
    },
    iconStyle: {
        width: 16,
        height: 16,
    }
})

export default styles;