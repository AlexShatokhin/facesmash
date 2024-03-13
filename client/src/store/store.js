import {configureStore} from "@reduxjs/toolkit"

import addPersonsReducer from "../modules/PersonAddition/slice/addPersonsSlice"
import personsListReducer from "../modules/PersonsList/slice/personsListSlice"

const store = configureStore({
    reducer: {addPersonsReducer, personsListReducer}
})

export default store;