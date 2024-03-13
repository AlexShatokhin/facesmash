import {configureStore} from "@reduxjs/toolkit"

import addPersonsReducer from "../modules/PersonAddition/slice/addPersonsSlice"
import personsListReducer from "../modules/PersonsList/slice/personsListSlice"
import themeReducer from "../components/ThemeButton/themeSlice"

const store = configureStore({
    reducer: {addPersonsReducer, personsListReducer, themeReducer}
})

export default store;