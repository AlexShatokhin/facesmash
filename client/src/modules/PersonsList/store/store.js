import { configureStore } from "@reduxjs/toolkit"
import personsListReducer from "../slice/personsListSlice"

const store = configureStore({
    reducer: personsListReducer,
    devTools: true
})

export default store;