import { ActivityIndicator } from "react-native";
import { useTypedSelector } from "@/src/hooks/useTypedSelector"

const Spinner = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme);
    return <ActivityIndicator size="large" color={theme === "light" ? "#37393d" : "#FFFFFF"}/>
}

export default Spinner;