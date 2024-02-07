import { Text, StyleSheet, Image } from "react-native"
import { smallShadow } from "../constants/shadow"
import Animated, {ZoomIn, ZoomOut, FadeIn, FadeOut} from "react-native-reanimated"

export default Popup = ({image, text}) => {
    return (
        <Animated.View style = {styles.popupLayout} entering={FadeIn} exiting={FadeOut}>
            <Animated.View 
                style = {styles.popupContent} 
                entering={ZoomIn.springify().stiffness(300).damping(20)} 
                exiting={ZoomOut}>
                <Image 
                    source={image}
                    alt="menu arrow"
                    style = {{width: 110, height: 110}}
                    resizeMode='contain'/>
                <Text style = {styles.popupText}>{text}</Text>
            </Animated.View>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    popupContent: {
        position: "absolute",
        top: "30%",
        left: "10%",
        width: 320,
        height: 280,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        paddingTop: 40,
        ...smallShadow,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    popupLayout: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "120%",
        backgroundColor: "#FFFFFFCC",
        zIndex: 10
    },
    popupText: {
        fontSize: 23,
        fontWeight: "500",
        textAlign: "center"
    }
})