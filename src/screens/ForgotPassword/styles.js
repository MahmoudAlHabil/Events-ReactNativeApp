import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.black,
        lineHeight: 38,
        marginTop: 80,
        marginBottom: 24,
        alignSelf: 'center',
    },
    button: {
        marginTop: "40@vs",
        width: "100%",
        marginTop: 35,
    },
    buttonText: {
        fontSize: "16@ms",
        fontWeight: "700   ",
        color: Colors.white,
    },
    icon: {
        alignSelf: 'flex-start',
        paddingTop: 15,
    },
})

export default styles;