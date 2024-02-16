import {Provider} from "react-redux"
import store from "./store/store"
import PersonAddition from "./components/PersonAddition"

const AddPerson = () => {
    return (
        <Provider store = {store}>
            <PersonAddition />
        </Provider>
    )
}

export default AddPerson