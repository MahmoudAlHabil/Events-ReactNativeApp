import { StyleSheet } from "react-native";
import { colors, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
    },
    label: {
        ...typography.M.medium,
        color: colors.gray[500],
        textAlign: "left",
    },
    dropDownContainer: {
        backgroundColor: colors.gray[100],
        borderRadius: 10,
        borderWidth: 0,
        // flex: 1,
    },
    itemSeparatorStyle: {
        backgroundColor: colors.gray[300],
        marginHorizontal: 10,
    },
})

export default styles