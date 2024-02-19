import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonsList from "../../../modules/PersonsList/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeAreaView from "../../../UI/SafeAreaViewStyled";
import { useLocalSearchParams } from "expo-router";


const RatingPage = () => {
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <AppSafeAreaView>

                <PersonsList />
                <AppMenu initialButton={id}/>

            </AppSafeAreaView>
        </SafeAreaProvider>

    )
}


export default RatingPage