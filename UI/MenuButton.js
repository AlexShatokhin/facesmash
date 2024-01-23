import {Image, Text } from "react-native";
import styled from "styled-components/native"

const MenuTouchableOpacity = styled.TouchableOpacity`
    width: 100px;
    height: 70px;
    display: flex;
    align-items: center;
`
const MenuButton = ({image, description}) => {

    return (
        <MenuTouchableOpacity>
                <Image 
                    source = {image}
                    alt="menu arrow"
                    style = {{width: 45, height: 45}}
                    resizeMode='contain'/> 
                <Text>{description}</Text>
        </MenuTouchableOpacity>

    )
}

export default MenuButton;