import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonAddition from "../../../modules/PersonAddition/PersonAddition";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeAreaView from "../../../UI/SafeAreaViewStyled";
import { useLocalSearchParams } from "expo-router";


const AddPersonPage = () => {
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <AppSafeAreaView>

                <PersonAddition />
                <AppMenu initialButton={id}/>
                
            </AppSafeAreaView>
        </SafeAreaProvider>

    )
}


export default AddPersonPage