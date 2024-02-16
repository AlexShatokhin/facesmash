import { configureStore } from "@reduxjs/toolkit"
import reducer from "../slice/addPersonsSlice";

const store = configureStore({
    reducer,
    devTools: true
})

export default store;