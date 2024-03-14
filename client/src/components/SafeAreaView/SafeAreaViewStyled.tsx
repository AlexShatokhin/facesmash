import { FC } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";

type AppSafeAreaViewProps = {
    children: JSX.Element
}

const AppSafeAreaView : FC<AppSafeAreaViewProps> = (props) => {
    const {height} = useWindowDimensions();
    const theme = useTypedSelector(state => state.themeReducer.theme);

    return (
        <SafeAreaView style = {{...styles.wrapper, height, backgroundColor: theme === "light" ? "#FFFFFF" : "#37393d"}}>
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