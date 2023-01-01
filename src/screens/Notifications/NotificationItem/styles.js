import { StyleSheet } from "react-native";
import { colors, shadow, typography } from "../../../utils";

const styles = (isTouched) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 75,
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: isTouched ? colors.common.white : colors.primary.light,
    },
    title: {
        ...typography.S.regular,
        color: colors.gray[500],
        flex: 1,
        textAlign: 'left',
        marginHorizontal: 10,
        lineHeight: 24,
    },
    time: {
        ...typography.XS.regular,
        color: colors.gray[500],
        lineHeight: 24,
    },
    modal: {
        alignItems: 'center',
    },
    contentModal: {
        backgroundColor: colors.common.white,
        width: '80%',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText: {
        ...typography.M.regular,
        color: colors.gray[500],
        textAlign: 'center',
        // lineHeight: 24,
        marginVertical: 20,
    },
    modalButton: {
        backgroundColor: colors.primary.main,
        borderRadius: 10,
        marginTop: 10,
    }
})

export default styles