import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    positiveScore: {
        position: "absolute",
        top: -50,
        left: 40,
        color: "#2ea20e",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30
    },
    negativeScore: {
        position: "absolute",
        top: -50,
        left: 40,
        color: "#C00000",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    }
})