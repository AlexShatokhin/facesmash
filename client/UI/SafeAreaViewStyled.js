import { useWindowDimensions } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";

const AppSafeAreaView = (props) => {
    const {height} = useWindowDimensions();

    return (
        <SafeAreaView style = {{
            height, 
            justifyContent: "space-between", 
            padding: 10}}>
                {props.children}
        </SafeAreaView>
    )
}

export default AppSafeAreaView