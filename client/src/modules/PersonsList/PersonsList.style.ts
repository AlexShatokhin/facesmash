import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const PersonRating = styled.Text`
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 3;
    font-size: 22px;
    font-weight: 700;
    color: #101010; 
    border: 1px solid #FFFFFFAA;
    padding: 0 5px;
    border-radius: 10px;
    background-color: #FFFFFFAA;
`

export const FilterContainer = styled.View`
    display: flex;
    width: 250px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    sheet: {
        position: "absolute",
        top: -20,
        left: -20,
        right: -20,
        bottom: -100,
        backgroundColor: "rgba(0, 0, 0, .0)",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 10,
    },

    sheetContent: {
        height: 700,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        overflow: "hidden"
    },

    imageGradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        height: 500
    },
    
    cardText: {
        fontSize: 25,
        fontWeight: "bold",
        height: "100%"
        }
})