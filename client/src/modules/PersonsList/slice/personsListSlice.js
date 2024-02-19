import { createSlice } from "@reduxjs/toolkit";

const personsListSlice = createSlice({
    name: "personsList",
    initialState: {
        persons: [],
        activeFilterIndex: 0
    },
    reducers: {
        updatePersons: (state, action) => {
            state.persons = action.payload;
        },
        updateFilterIndex: (state, action) => {
            state.activeFilterIndex = action.payload
        }
    }
})

const {actions, reducer} = personsListSlice;
export default reducer;
export const {updateFilterIndex, updatePersons} = actions