import { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";

type AppCreateAccountButtonProps = {
    text: string | "",
    onPress?: () => void
}

const AppCreateAccountButton : FC<AppCreateAccountButtonProps > = ({text, onPress}) => {
    const theme = useTypedSelector(state => state.themeReducer.theme);
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style = {{...styles.buttonText, color: theme === "light" ? "#000000" : "#FFFFFF"}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default AppCreateAccountButton;

const styles = StyleSheet.create({

    buttonText: {
        textDecorationLine: "underline",
    }
})