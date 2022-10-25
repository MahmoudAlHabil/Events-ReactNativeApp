import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 41,
    },
})

export default styles;