import { StyleSheet } from "react-native";
import { colors, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    noInterestsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noInterestsText: {
        ...typography.M.regular,
        color: colors.gray[500],
    },
    flatList: {
        marginTop: 20,
        paddingBottom: 75,
    },
})

export default styles