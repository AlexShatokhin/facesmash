import {configureStore} from "@reduxjs/toolkit"

import addPersonsReducer from "../modules/PersonAddition/slice/addPersonsSlice"
import personsListReducer from "../modules/PersonsList/slice/personsListSlice"
import themeReducer from "../components/ThemeButton/themeSlice"
import authorizationReducer from "../modules/AppAuthorization/slice/AuthorizationSlice"

const store = configureStore({
    reducer: {
        addPersonsReducer,
        personsListReducer,
        themeReducer,
        authorizationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;