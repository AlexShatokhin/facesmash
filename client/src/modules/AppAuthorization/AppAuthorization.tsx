import { FC } from "react";
import { View, Text } from "react-native";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";

import AppSafeAreaView from "@/src/components/SafeAreaView/SafeAreaViewStyled";
import FormInputs from "./components/FormInputs";
import FormToggling from "./components/FormToggling";
import Authorization from "./components/Authorization";

import RequestMessage from "./UI/RequestMessage";

import {styles} from "./appAutorization.styles";

const AppAuthorization : FC = () => {

    const theme = useTypedSelector(state => state.themeReducer.theme);
    const {logInMode, requestMessage} = useTypedSelector(state => state.authorizationReducer);

    return (
        <AppSafeAreaView >

            <View style={styles.container}>

                <Text 
                    style = {{...styles.authorizationTitle, color: theme === "light" ? "#000000" : "#FFFFFF"}}>
                    {logInMode ? "Авторизация" : "Создание аккаунта"}
                </Text>

                <RequestMessage message={requestMessage}/>
                <FormInputs />
                <Authorization />
                <FormToggling />

            </View>


        </AppSafeAreaView>
    )
}

export default AppAuthorization;
