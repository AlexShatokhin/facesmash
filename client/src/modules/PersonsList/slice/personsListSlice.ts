import { createSlice } from "@reduxjs/toolkit";

const personsListSlice = createSlice({
    name: "personsList",
    initialState: {
        persons: [],
        activeFilterIndex: 0,
        showBottomSheet: false,
        bottomSheetPersonId: 0
    },
    reducers: {
        updatePersons: (state, action) => {
            state.persons = action.payload;
        },
        updateFilterIndex: (state, action) => {
            state.activeFilterIndex = action.payload
        },
        toggleBottomSheet: (state, action) => {
            state.showBottomSheet = !state.showBottomSheet;
            state.bottomSheetPersonId = action.payload ? action.payload : 0

        }
    }
})

const {actions, reducer} = personsListSlice;
export default reducer;
export const {updateFilterIndex, updatePersons, toggleBottomSheet} = actions