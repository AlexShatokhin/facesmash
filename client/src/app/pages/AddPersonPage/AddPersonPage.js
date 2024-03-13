import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import AppMenu from "../../../modules/AppMenu/AppMenu"
import AddPerson from "../../../modules/PersonAddition/PersonAddition";
import store from "../../../store/store";

import SwitchThemeButton from "../../../components/ThemeButton/ThemeButton";
import AppSafeAreaView from "../../../components/SafeAreaView/SafeAreaViewStyled";


const AddPersonPage = () => {
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView>

                    <SwitchThemeButton />
                    <AddPerson />
                    <AppMenu initialButton={id}/>
                    
                </AppSafeAreaView>
            </Provider>
        </SafeAreaProvider>

    )
}


export default AddPersonPage