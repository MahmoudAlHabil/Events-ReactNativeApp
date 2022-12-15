import { StyleSheet } from "react-native";
import { colors, shadow, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.common.white,
        padding: 20,
        paddingTop: 0,
        paddingBottom: 60,
    },
    welcomeText: {
        ...typography.S.semibold,
        color: colors.gray[500],
        marginVertical: 8,
        marginTop: 27,
    },
    name: {
        color: colors.gray[800],
    },
    wrapper: {
        height: 170,
        backgroundColor: colors.common.white,
        borderRadius: 10,
        overflow: "hidden",
        ...shadow,
        elevation: 2,
    },
    slide: {
        width: '100%',
        height: '100%',
    },
    dot: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginEnd: 5,
        marginBottom: -20
    },
    publicEventText: {
        ...typography.S.semibold,
        color: colors.gray[700],
        marginTop: 26,
        marginBottom: 8,
    },
    publicEventTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    seeAllText: {
        ...typography.XS.regular,
        color: '#ff7e42',
        marginTop: 14,
    },
    horizontalLine: {
        borderBottomColor: colors.gray[300],
        borderBottomWidth: 0.5,
        marginHorizontal: -20,
        marginTop: 15,
        marginBottom: -10,
    },
    loading: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: -5,
        marginTop: 15,
    },
    headerLeft: {
        marginTop: 6,
    },
    headerRight: {
    },
    badge: {
        position: "absolute",
        top: -1,
        left: -3,
        backgroundColor: colors.danger.main,
        borderRadius: 10,
        width: 15,
        height: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    badgeText: {
        color: colors.common.white,
        fontSize: 10,
        lineHeight: 12,
    }
    
})

export default styles;