import styled from "styled-components/native";

export const PersonCardTouchableOpacity = styled.TouchableOpacity`
    width: 170px;
    height: 260px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 10px;
` 

export const PersonCardImage = styled.Image`
    background-color: #A0A0A0;
    width: 100%;
    height: 85%;
`

export const PersonCardTextWrapper = styled.View`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PersonCardText = styled.Text`
    font-weight: 700;
    font-size: 15px;
`


