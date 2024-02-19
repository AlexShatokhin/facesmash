import PersonsListModule from "./components/PersonsList";
import { Provider } from "react-redux";
import store from "./store/store";

const PersonsList = () => {
    return (
        <Provider store = {store}>
            <PersonsListModule />
        </Provider>
    )
}

export default PersonsList