import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#00000088',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 100
    },
    buttonSmall: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#00000088',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonLarge: {
        width: 140,
        height: 60,
    },
    menuLayout: {
        width: 150,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flexDirection: "row",

        position: "absolute",
        top: 80,
        right: 20,
        zIndex: 100
    },
    menuText: {
        color: "#FFFFFF"
    }
})