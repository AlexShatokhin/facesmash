import { View } from "react-native";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";
import { useDispatch } from "react-redux";

import { changeInputValue } from "../slice/AuthorizationSlice";

import AppInput from "../UI/AppInput";
import {styles} from "../appAutorization.styles";

const FormInputs = () => {

    const {logInMode, phone, password, name} = useTypedSelector(state => state.authorizationReducer);
    const dispatch = useDispatch();

    function changeInputValueHandler(name: "phone" | "password" | "name", value: string){
        dispatch(changeInputValue({name, value}));
    }

    return (
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
                name = "phone"
                value={phone}
                placeholder="Enter phone number"
                onChangeText={(e) => {changeInputValueHandler("phone", e)}}/>

            <AppInput 
                style = {styles.input}
                secureTextEntry={true}
                name = "password"
                value={password}
                placeholder="Enter password"
                onChangeText={(e) => {changeInputValueHandler("password", e)}}/>  

        </View>
    )
}

export default FormInputs;