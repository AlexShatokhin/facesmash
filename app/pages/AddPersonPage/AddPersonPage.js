import { useWindowDimensions } from "react-native"
import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonAddition from "../../../modules/PersonAddition/PersonAddition";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";


const AddPersonPage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <SafeAreaView style = {{
					height, 
					justifyContent: "space-between", 
					padding: 10}}>
                <PersonAddition />
                <AppMenu
                    initialButton={id}/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


export default AddPersonPage