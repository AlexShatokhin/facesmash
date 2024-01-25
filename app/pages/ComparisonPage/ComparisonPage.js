import { useWindowDimensions } from "react-native"
import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonComparison from "../../../modules/PersonComparison/PersonComparison";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";


const ComparisonPage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <SafeAreaView style = {{
					height, 
					justifyContent: "space-between", 
					padding: 10}}>
                <PersonComparison 
                    persons={[{name: "Robert Pattison"}, {name: "Sam Graham"}]}
                    style = {{flex: 1, justifyContent: "center"}}/>
                <AppMenu
                    initialButton={id}/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}


export default ComparisonPage