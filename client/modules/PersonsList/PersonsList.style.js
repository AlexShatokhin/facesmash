import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const PersonRating = styled.Text`
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 3;
    font-size: 22px;
    font-weight: 700;
    color: #000000; 
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
    }
})