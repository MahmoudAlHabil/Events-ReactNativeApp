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
        marginTop: 54,
        marginBottom: 54,
    },
    input: {
        marginBottom: 16,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 54,
    },
    nextButton: {
        backgroundColor: colors.primary.main,
        width: '47%',
        height: 40,
    },
    nextButtonText: {
        color: colors.common.white,
        ...typography.M.medium,
        lineHeight: 28,
    },
    cancelButton: {
        marginEnd: 10,
        width: '47%',
        height: 40,
        backgroundColor: colors.common.white,
        borderWidth: 1,
        borderColor: colors.primary.main,
    },
    cancelButtonText: {
        color: colors.primary.main,
        ...typography.M.medium,
        lineHeight: 28,
    },
})

export default styles