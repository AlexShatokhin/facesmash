import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../../hooks/http.hook";

const addPersonSlice = createSlice({
    name: "adding_person",
    initialState: {
        personForm: {
            name: "",
            surname: ""
        },
        isImageLoaded: false,
        showPopup: 0,
        imageData: {}
    },
    reducers: {
        clearForm: (state) => {
            state.personForm = {
                name: "",
                surname: ""
            }
            state.isImageLoaded = false;
            state.imageData = {};
        },
        getFormData: (state, action) => {
            state.personForm[action.payload.name] = action.payload.text
        },
        changePopupValue: (state, action) => {
            state.showPopup = action.payload
        },
        changeImageLoadedStatus: (state, action) => {
            state.isImageLoaded = action.payload
        },
        changeImageData: (state, action) => {
            state.imageData = action.payload
        }
    }
})

const {reducer, actions} = addPersonSlice;

export default reducer;
export const {
    clearForm,
    getFormData,
    changePopupValue,
    changeImageLoadedStatus,
    changeImageData
} = actions;
