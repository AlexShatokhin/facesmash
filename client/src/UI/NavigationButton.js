import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

const NavigationTouchableOpacity = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
`

const NavigationButton = () => {
    const arrow = require("../constants/icons").chevronLeft
    return (
        <NavigationTouchableOpacity>
                <Image 
                    source = {arrow}
                    alt="menu arrow"
                    style = {{width: 45, height: 45}}
                    resizeMode='contain'/> 
        </NavigationTouchableOpacity>

    )
}

export default NavigationButton;