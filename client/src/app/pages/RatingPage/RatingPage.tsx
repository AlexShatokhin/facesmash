import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonsList from "../../../modules/PersonsList/PersonsList";
import store from "../../../store/store";

import ProfileMenu from "@/src/components/ProfileMenu/ProfileMenu";
import AppSafeAreaView from "../../../components/SafeAreaView/SafeAreaViewStyled";

const RatingPage = () => {
    const {id} = useLocalSearchParams() as {id: string};

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView>
                    
                    <ProfileMenu />
                    <PersonsList />
                    <AppMenu initialButton={id}/>

                </AppSafeAreaView>                
            </Provider>

        </SafeAreaProvider>

    )
}


export default RatingPage