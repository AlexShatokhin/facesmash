import { Image } from "react-native";
import { useDispatch} from "react-redux";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";
import { toggleTheme } from "./themeSlice";

import styled from "styled-components/native";
import moon from "../../assets/icons/moon.png";
import sun from "../../assets/icons/sun.png";

const NavigationTouchableOpacity = styled.TouchableOpacity`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 30px;
`

const SwitchThemeButton = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme);
    const dispatch = useDispatch();

    return (
        <NavigationTouchableOpacity onPress={() => dispatch(toggleTheme())}>
            <Image source = {theme === "dark" ? sun : moon} style = {{width: 30, height: 30}}/>
        </NavigationTouchableOpacity>

    )
}

export default SwitchThemeButton;