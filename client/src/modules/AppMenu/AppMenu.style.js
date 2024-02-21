import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const MenuMain = styled.View`
    width: 380px;
    height: 100px;
    z-index: 2;
`

export const MenuSplitter = styled.View`
    width: 100%;
    height: 1px;
    border: 1px solid #A0A0A0;
    opacity: .2;
    margin: 5px 0;
` 

export const MenuItemsListWrapper = styled.View`
    width: 100%;
    display: block;
`

export const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: "#A0A0A040"
    }
})