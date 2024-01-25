import {Image, Text } from "react-native";
import styled from "styled-components/native"

const MenuTouchableOpacity = styled.TouchableOpacity`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
`
const MenuButton = ({image, description, isActive, ...props}) => {

    return (
        <MenuTouchableOpacity {...props}>
                <Image 
                    source = {image}
                    alt="menu arrow"
                    style = {isActive ? {width: 50, height: 50} : {width: 45, height: 45}}
                    resizeMode='contain'/> 
                    
                <Text style = {isActive ? {fontWeight: 700} : null}>{description}</Text>
        </MenuTouchableOpacity>

    )
}

export default MenuButton;