import { ScaledSheet } from "react-native-size-matters";
import { colors, typography } from "../../../../utils";

const styles = (width) => ScaledSheet.create({
    container: {
        paddingHorizontal: 20,
        width: width,
    },
    image: {
        alignSelf: 'center',
        marginTop: 100,
    },
    title: {
        ...typography.XL.semibold,
        color: colors.gray[800],
        alignSelf: "flex-start",
        marginTop: 90,
        marginBottom: 8,
    },
    description: {
        ...typography.L.regular,
        color: colors.gray[500],
        alignSelf: "flex-start",
        marginBottom: 40,
    },
});

export default styles;