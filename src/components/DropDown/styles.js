import { StyleSheet } from "react-native";
import { colors, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
    },
    dropDown: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        width: "100%",
        borderRadius: 10,
        backgroundColor: colors.gray[100],
        paddingHorizontal: 12,
    },
    placeholder: {
        color: '#999',
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
    itemSeparatorStyle: {
        backgroundColor: colors.gray[300],
        marginHorizontal: 10,
    },
})

export default styles