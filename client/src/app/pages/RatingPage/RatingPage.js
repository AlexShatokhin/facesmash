import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonsList from "../../../modules/PersonsList/PersonsList";
import store from "../../../store/store";

import AppSafeAreaView from "../../../UI/SafeAreaViewStyled";


const RatingPage = () => {
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView>

                    <PersonsList />
                    <AppMenu initialButton={id}/>

                </AppSafeAreaView>                
            </Provider>

        </SafeAreaProvider>

    )
}


export default RatingPage