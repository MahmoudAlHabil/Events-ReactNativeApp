import { StyleSheet } from "react-native";
import { colors, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    action: {
        flexDirection: "row",
        marginTop: 31,
    },
    actionText: {
        ...typography.M.regular,
        color: colors.gray[600],
        lineHeight: 21,
        marginLeft: 4,
    },
    arrow: {
        color: colors.gray[600],
        fontSize: 30,
        lineHeight: 24,
    },

})

export default styles