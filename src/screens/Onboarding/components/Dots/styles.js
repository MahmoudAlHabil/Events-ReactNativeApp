import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../../utils";

const styles = ScaledSheet.create({
    mainDotContainer: {
        marginHorizontal: 2,
        borderRadius: 15 / 2,
        alignSelf: "center",
        height: 8,
        width: 8,
    },
    primaryBullet: {
        backgroundColor: colors.primary.main,
    },
    grayBullet: {
        backgroundColor: colors.gray[100],
    },
});


export default styles;