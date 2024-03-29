import { createSlice } from "@reduxjs/toolkit";

type setDataType = {
    name: "login" | "password" | "smsCode",
    value: string

}

const AuthorizationSlice = createSlice({
    name: "authorization",
    initialState: {
        isAuthorized: false,
        login: "",
        password: "",
        name: "",
        smsCode: "",
        logInMode: true,
    },
    reducers: {
        setAuthorization: (state, action) => {
            state.isAuthorized = action.payload.isAuthorized;
        },
        changeInputValue: (state, action) => {
            const typedAction = action as {payload: setDataType};
            state[typedAction.payload.name] = typedAction.payload.value;
        },
        toggleMode: (state) => {
            state.logInMode = !state.logInMode;
            state.login = "";
            state.password = "";
            state.name = "";
            state.smsCode = "";
        },
        clearForm: (state) => {
            state.login = "";
            state.password = "";
            state.name = "";
            state.smsCode = "";
        }
    },
});

const {reducer, actions} = AuthorizationSlice;
export default reducer;
export const {
    setAuthorization,
    changeInputValue,
    toggleMode
} = actions