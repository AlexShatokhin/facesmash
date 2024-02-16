import { useWindowDimensions, StyleSheet } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";

const AppSafeAreaView = (props) => {
    const {height} = useWindowDimensions();

    return (
        <SafeAreaView style = {{...styles.wrapper, height}}>
                {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between", 
        padding: 10
    }
})

export default AppSafeAreaView