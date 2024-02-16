import { useWindowDimensions, StyleSheet } from "react-native"
import AppMenu from "../../../modules/AppMenu/AppMenu"
import HomePageContent from "../../../modules/HomePageContent/HomePageContent"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";


const HomePage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <SafeAreaView style = {{height, ...styles.view}}>
                <HomePageContent style = {styles.page}/>
                <AppMenu initialButton={id}/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    view: {
        height, 
        justifyContent: "space-between", 
        padding: 10
    },
    page: {
        flex: 1, 
        justifyContent: "center"
    }
})

export default HomePage