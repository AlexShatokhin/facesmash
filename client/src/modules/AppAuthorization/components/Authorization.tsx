import { ActivityIndicator } from "react-native"
import { useTypedSelector } from "@/src/hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import useHttp from "@/src/hooks/http.hook" 

import { clearForm, changeRequestMessage } from "../slice/AuthorizationSlice"

import sendAuthorizationQuery from "../api/sendAuthorizationQuery"
import sendRegistrationQuery from "../api/sendRegistrationQuery"

import AppAuthorizationButton from "../UI/AppAuthorizationButton"
import Spinner from "../UI/Spinner"

const Authorization = () => {

    const {logInMode, phone, password, name} = useTypedSelector(state => state.authorizationReducer);
    const dispatch = useDispatch();
    const {httpRequest, loading} = useHttp();

    function registerUser(){
        sendRegistrationQuery(name, phone, password, httpRequest)
        .then((res) => dispatch(changeRequestMessage(res.message)))
        .finally(() => dispatch(clearForm()))
    }

    function authUser(){
        sendAuthorizationQuery(phone, password, httpRequest)
        .then((res) => dispatch(changeRequestMessage(res.message)))
        .finally(() => dispatch(clearForm()))
    }

    const authorizationContent = loading ? 
        <Spinner /> : 
        <AppAuthorizationButton 
            onPress={() => logInMode ? authUser() : registerUser()}
            text={logInMode ? "Войти" : "Создать аккаунт"}/>;

    return authorizationContent
}

export default Authorization;