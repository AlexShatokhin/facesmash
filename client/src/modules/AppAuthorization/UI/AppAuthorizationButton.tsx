import { FC } from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

type AppAuthorizationButtonProps = {
    text: string | ""
}

const AppAuthorizationButton : FC<AppAuthorizationButtonProps> = ({text}) => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default AppAuthorizationButton;

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        backgroundColor: "#F4F4FB",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#80808055",
        borderWidth: 2,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
    }
})