import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonsList from "../../../modules/PersonsList/PersonsList";
import store from "../../../store/store";

import SwitchThemeButton from "../../../components/ThemeButton/ThemeButton";
import AppSafeAreaView from "../../../components/SafeAreaView/SafeAreaViewStyled";

import AppAuthorization from "@/src/modules/AppAuthorization/AppAuthorization";

const RatingPage = () => {
    const {id} = useLocalSearchParams() as {id: string};

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView>
                    
                    <SwitchThemeButton />
                    {/* <PersonsList />
                    <AppMenu initialButton={id}/> */}

                    <AppAuthorization />

                </AppSafeAreaView>                
            </Provider>

        </SafeAreaProvider>

    )
}


export default RatingPage