import { useWindowDimensions } from "react-native"
import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonsList from "../../../modules/PersonsList/PersonsList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";


const RatingPage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <SafeAreaView style = {{
					height, 
					justifyContent: "space-between", 
					padding: 10}}>
                <PersonsList />
                {console.log(id)}
                <AppMenu
                    initialButton={id}/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


export default RatingPage