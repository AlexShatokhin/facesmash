import { View, StyleSheet, Dimensions, useWindowDimensions } from "react-native"
import AppMenu from "../../modules/AppMenu/AppMenu"
import HomePageContent from "../../modules/HomePageContent/HomePageContent"

const HomePage = () => {
    return (    
        <View  style = {{flex: 1, justifyContent: "center"}}>
            <HomePageContent />
        </View>
    )
}



export default HomePage