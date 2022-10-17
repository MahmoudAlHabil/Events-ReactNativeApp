import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: "23@s",
    },
    welcomeText: {
        marginTop: "20@vs",
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: "25@ms",
        fontWeight: "400",
        color: Colors.text,
        lineHeight: "48@ms",
        marginEnd: "10@s",
    },
    loginText: {
        fontSize: "20@ms",
        fontWeight: "600",
        color: Colors.text,
        marginTop: "38@vs",
    },
    input: {
        marginTop: "32@vs",
    },
    passwordInput: {
        marginTop: "21@vs",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        marginTop: 6,
    },
    button: {
        marginTop: "40@vs",
        width: "100%",
        marginTop: 30,
    },
    buttonText: {
        fontSize: "16@ms",
        fontWeight: "700   ",
        color: Colors.white,
    },
    forgotPassword: {
        marginTop: "9@vs",
        alignSelf: "flex-end",
        color: Colors.primary,
        fontWeight: "400",
    },
    footer: {
        flexDirection: "row",
        alignSelf: "center",
        position: "absolute",
        bottom: "10@vs",
    },
    footerText: {
        fontSize: "16@ms",
        fontWeight: "400",
        lineHeight: "31@ms",
        color: Colors.text,
    },
    footerLink: {
        fontSize: "16@ms",
        fontWeight: "700",
        lineHeight: "31@ms",
        color: Colors.primary,
    },
})

export default styles