import { StyleSheet } from "react-native";
import { colors, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    form: {
        flex: 1,
    },
    headerText: {
        ...typography.XL.bold,
        color: colors.gray[500],
        textAlign: 'center',
        marginVertical: 16,
    },
    input: {
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '48%',
        marginLeft: '2%',
    },
    cancelButton: {
        marginEnd: 10,
        width: '48%',
        marginRight: '2%',
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
    cancelButtonText: {
        color: colors.primary.main,
    },
})

export default styles