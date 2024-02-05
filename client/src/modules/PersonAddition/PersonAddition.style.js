import { StyleSheet } from "react-native";
import {smallShadow} from "../../constants/shadow";

export default styles = StyleSheet.create({
    container: {
        height: 350
    },
    createCardContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 80,
        height: 200,
    },
    inputsWrapper: {
        height: 170,
        width: 260,
        justifyContent: "space-around"
    },
    createButton: smallShadow
})