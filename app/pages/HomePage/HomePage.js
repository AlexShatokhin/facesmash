import { useWindowDimensions } from "react-native"
import AppMenu from "../../../modules/AppMenu/AppMenu"
import HomePageContent from "../../../modules/HomePageContent/HomePageContent"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";


const HomePage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <SafeAreaView style = {{
					height, 
					justifyContent: "space-between", 
					padding: 10}}>
                <HomePageContent style = {{flex: 1, justifyContent: "center"}}/>
                <AppMenu initialButton={id}/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


export default HomePage