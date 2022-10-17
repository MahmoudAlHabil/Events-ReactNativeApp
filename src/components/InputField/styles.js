import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../utils';

const styles = ScaledSheet.create({
    container: {
    },
    inputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        height: 48,
        borderRadius: 10,
        backgroundColor: Colors.inputColor,
        paddingStart: 19,
        paddingEnd: 19,
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 14,
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '500'
    },
})

export default styles;