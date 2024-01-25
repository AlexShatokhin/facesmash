import {Image, Text } from "react-native";
import styled from "styled-components/native"

const MenuTouchableOpacity = styled.TouchableOpacity`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px 0;
`
const MenuButton = ({image, description, isActive, ...props}) => {

    return (
        <MenuTouchableOpacity {...props}>
                <Image 
                    source = {image}
                    alt="menu arrow"
                    style = {isActive ? {width: 60, height: 60} : {width: 45, height: 45}}
                    resizeMode='contain'/> 
                    
                {isActive ? null : <Text>{description}</Text>}
        </MenuTouchableOpacity>

    )
}

export default MenuButton;