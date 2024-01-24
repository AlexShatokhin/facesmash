import { View, StyleSheet } from "react-native"
import AppMenu from "../../modules/AppMenu/AppMenu"
import HomePageContent from "../../modules/HomePageContent/HomePageContent"

const HomePage = () => {
    return (
        <View style = {styles.container}>
            <HomePageContent />
            <AppMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomePage