import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";

import { toggleMode, changeInputValue } from "./slice/AuthorizationSlice";

import AppSafeAreaView from "@/src/components/SafeAreaView/SafeAreaViewStyled";
import SwitchThemeButton from "@/src/components/ThemeButton/ThemeButton";

import AppInput from "./UI/AppInput";
import AppAuthorizationButton from "./UI/AppAuthorizationButton";
import AppCreateAccountButton from "./UI/AppCreateAccountButton";

const AppAuthorization : FC = () => {

    const theme = useTypedSelector(state => state.themeReducer.theme);
    const {logInMode, login, password, name} = useTypedSelector(state => state.authorizationReducer);
    const dispatch = useDispatch();

    function changeInputValueHandler(name: "login" | "password" | "name", value: string){
        dispatch(changeInputValue({name, value}));
    }

    return (
        <AppSafeAreaView >
            <SwitchThemeButton />

            <View style={styles.container}>

                <Text style = {{...styles.authorizationTitle, color: theme === "light" ? "#000000" : "#FFFFFF"}}>{logInMode ? "Авторизация" : "Создание аккаунта"}</Text>

                <View style = {styles.form}>

                {logInMode ? 
                        null : 
                        <AppInput 
                            style = {styles.input}
                            name = "name"
                            value={name}
                            placeholder="Enter name"
                            onChangeText={(e) => {changeInputValueHandler("name", e)}}/>  
                    }

                    <AppInput 
                        style = {styles.input}
                        name = "login"
                        value={login}
                        placeholder="Enter login"
                        onChangeText={(e) => {changeInputValueHandler("login", e)}}/>

                    <AppInput 
                        style = {styles.input}
                        name = "password"
                        value={password}
                        placeholder="Enter password"
                        onChangeText={(e) => {changeInputValueHandler("password", e)}}/>  

                </View>
                
                <AppAuthorizationButton text={logInMode ? "Войти" : "Создать аккаунт"}/>

                <View style = {{marginTop: 20}}>
                    {logInMode ?                 
                        <Text style = {{color: theme === "light" ? "#808080" : "#FFFFFF"}}>
                            Еще нет аккаунта?
                        </Text> : null}

                    <AppCreateAccountButton 
                        text={logInMode ? "Создать аккаунт" : "Вернуться к авторизации"}
                        onPress = {() => dispatch(toggleMode())}/>
                </View>


            </View>


        </AppSafeAreaView>
    )
}

export default AppAuthorization;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        width: 300,
        minHeight: 150,
    },
    input: {
        marginBottom: 10,
    },
    authorizationTitle:{
        fontSize: 27,
        marginBottom: 40,
    }
});