import { useState } from "react";
import { View, Text, Image } from "react-native";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { router } from "expo-router";

import { removeAuthorizationData } from "@/src/modules/AppAuthorization/slice/AuthorizationSlice";

import SwitchThemeButton from "../ThemeButton/ThemeButton";

import MainProfileButton from "./UI/MainProfileButton";
import ProfileButton from "./UI/ProfileButton";

import {styles} from './profileButton.style';

const ProfileMenu = () => {

    const authorizationData = useTypedSelector(state => state.authorizationReducer.authorizationData);
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function logOut(){
        dispatch(removeAuthorizationData());
        router.navigate("/")
    }

    return (
        <View>
            <MainProfileButton onPress = {toggleMenu} />

            {showMenu ? 
                    <View style = {styles.menuLayout}>
                        <ProfileButton type = "large">
                            <Text style = {styles.menuText}>Привет, {authorizationData.name}!</Text>
                        </ProfileButton>

                        <ProfileButton type = "small">
                            <SwitchThemeButton/>
                        </ProfileButton>

                        <ProfileButton onPress={logOut} type = "small">
                            <Image 
                                source = {require("../../constants/icons").default.exit} 
                                alt="user"
                                style = {{width: 30, height: 30}}
                                resizeMode='contain'
                            />
                        </ProfileButton>
                    </View> : null
            }

        </View>
    )
}

export default ProfileMenu;