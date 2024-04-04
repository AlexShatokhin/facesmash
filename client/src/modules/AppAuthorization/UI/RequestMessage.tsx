import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type RequestMessageProps = {
    message: string
}

const RequestMessage : FC<RequestMessageProps> = ({message}) => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.styledText}>{message}</Text>
        </View>
    )
}

export default RequestMessage;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    styledText: {
        color: "#DD0000",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    }
})