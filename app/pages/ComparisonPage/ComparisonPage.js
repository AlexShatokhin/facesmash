import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonComparison from "../../../modules/PersonComparison/PersonComparison";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeAreaView from "../../../UI/SafeAreaViewStyled";
import { useLocalSearchParams } from "expo-router";


const ComparisonPage = () => {
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <AppSafeAreaView>

                <PersonComparison 
                    persons={[{name: "Robert Pattison"}, {name: "Sam Graham"}]}
                    style = {{flex: 1, justifyContent: "center"}}/>
                <AppMenu initialButton={id}/>
                
            </AppSafeAreaView>
        </SafeAreaProvider>

    )
}


export default ComparisonPage