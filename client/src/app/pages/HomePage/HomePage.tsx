import { useWindowDimensions, StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import store from "../../../store/store";
import AppMenu from "../../../modules/AppMenu/AppMenu"
import HomePageContent from "../../../modules/HomePageContent/HomePageContent"

import SwitchThemeButton from "../../../components/ThemeButton/ThemeButton";
import AppSafeAreaView from "../../../components/SafeAreaView/SafeAreaViewStyled";

const HomePage = () => {
    const {height} = useWindowDimensions();
    const {id} = useLocalSearchParams() as {id: string};

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView style = {{height, ...styles.view}}>

                    <SwitchThemeButton />
                    <HomePageContent style = {styles.page}/>
                    <AppMenu initialButton={id}/>
                    
                </AppSafeAreaView>                
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