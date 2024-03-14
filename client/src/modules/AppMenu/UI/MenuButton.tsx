import { FC } from "react";
import {Image, Text, ImageSourcePropType } from "react-native";
import styled from "styled-components/native"

const MenuTouchableOpacity = styled.TouchableOpacity`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
`

type MenuButtonProps = {
    image: ImageSourcePropType,
    description: string,
    isActive: boolean,
    theme: string,
    style: object | null,
    onPress: () => void
}

const MenuButton : FC<MenuButtonProps> = ({image, description, isActive, theme, ...props}) => {

    return (
        <MenuTouchableOpacity {...props}>
                <Image 
                    source = {image}
                    alt="menu arrow"
                    style = {isActive ? {width: 50, height: 50} : {width: 45, height: 45}}
                    resizeMode='contain'/> 
                    
                <Text style = {{fontWeight: isActive ? "700" : "400", color: theme === "light" ? "#000000" : "#FFFFFF"}}>{description}</Text>
        </MenuTouchableOpacity>

    )
}

export default MenuButton;