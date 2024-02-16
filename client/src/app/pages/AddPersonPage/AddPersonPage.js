import AppMenu from "../../../modules/AppMenu/AppMenu"
import AddPerson from "../../../modules/PersonAddition";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeAreaView from "../../../UI/SafeAreaViewStyled";
import { useLocalSearchParams } from "expo-router";


const AddPersonPage = () => {
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <AppSafeAreaView>

                <AddPerson />
                <AppMenu initialButton={id}/>
                
            </AppSafeAreaView>
        </SafeAreaProvider>

    )
}


export default AddPersonPage