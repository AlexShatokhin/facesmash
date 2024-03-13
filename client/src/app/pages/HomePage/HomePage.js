import { useWindowDimensions, StyleSheet } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import store from "../../../store/store";
import AppMenu from "../../../modules/AppMenu/AppMenu"
import HomePageContent from "../../../modules/HomePageContent/HomePageContent"


const HomePage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams();

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <SafeAreaView style = {{height, ...styles.view}}>
                    <HomePageContent style = {styles.page}/>
                    <AppMenu initialButton={id}/>
                </SafeAreaView>                
            </Provider>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: "space-between", 
        padding: 10
    },
    page: {
        flex: 1, 
        justifyContent: "center"
    }
})

export default HomePage