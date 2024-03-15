import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type FormDataPayloadType = {
    name: "name" | "surname",
    text: string
}

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
            const typedAction = action as {payload: FormDataPayloadType};
            state.personForm[typedAction.payload.name] = typedAction.payload.text
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
