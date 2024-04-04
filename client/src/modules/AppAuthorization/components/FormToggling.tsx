import { View, Text } from "react-native"
import { useTypedSelector } from "@/src/hooks/useTypedSelector"
import { useDispatch } from "react-redux"

import { toggleMode } from "../slice/AuthorizationSlice"

import AppCreateAccountButton from "../UI/AppCreateAccountButton"

const FormToggling = () => {
    const {logInMode} = useTypedSelector(state => state.authorizationReducer);
    const theme = useTypedSelector(state => state.themeReducer.theme);
    const dispatch = useDispatch();

    return (
        <View style = {{marginTop: 20}}>
        {logInMode ?                 
            <Text style = {{color: theme === "light" ? "#808080" : "#FFFFFF"}}>
                Еще нет аккаунта?
            </Text> : null}

        <AppCreateAccountButton 
            text={logInMode ? "Создать аккаунт" : "Вернуться к авторизации"}
            onPress = {() => dispatch(toggleMode())}/>
    </View>
    )
}

export default FormToggling;