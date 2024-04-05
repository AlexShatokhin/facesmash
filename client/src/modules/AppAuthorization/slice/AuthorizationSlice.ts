import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationDataType } from "@/src/types/AthorizationDataType";

type setDataType = {
    name: "phone" | "password" | "smsCode",
    value: string
}

const AuthorizationSlice = createSlice({
    name: "authorization",
    initialState: {
        isAuthorized: false,
        phone: "+373",
        password: "",
        name: "",
        smsCode: "",
        logInMode: true,
        requestMessage: "",
        authorizationData: {
            id: 0,
            name: "",
            phone: "",
            password: "",
            role: "",
        }
    },
    reducers: {
        setAuthorization: (state, action) => {
            state.isAuthorized = action.payload.isAuthorized;
        },
        changeInputValue: (state, action) => {
            const typedAction = action as {payload: setDataType};
            state[typedAction.payload.name] = typedAction.payload.value;
            state.requestMessage = "";
        },
        toggleMode: (state) => {
            state.logInMode = !state.logInMode;
            state.phone = "+373";
            state.password = "";
            state.name = "";
            state.smsCode = "";
            state.requestMessage = "";

        },
        clearForm: (state) => {
            state.phone = "+373";
            state.password = "";
            state.name = "";
            state.smsCode = "";
        },
        changeRequestMessage: (state, action) => {
            state.requestMessage = action.payload;
        },
        getAuthorizationData: (state, action) => {
            const typedAction = action as {payload: AuthorizationDataType};
            state.authorizationData = typedAction.payload;
        },
        removeAuthorizationData: (state) => {
            state.authorizationData = {
                id: 0,
                name: "",
                phone: "",
                password: "",
                role: "",
            };
        }
    },
});

const {reducer, actions} = AuthorizationSlice;
export default reducer;
export const {
    setAuthorization,
    changeInputValue,
    toggleMode,
    changeRequestMessage,
    clearForm,
    getAuthorizationData,
    removeAuthorizationData
} = actions