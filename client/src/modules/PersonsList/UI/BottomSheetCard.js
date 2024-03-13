import {View, Text, Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { useSelector } from "react-redux"

import { styles } from "../PersonsList.style"

export default function BottomSheetCard({name, surname, image}) {
    const theme = useSelector(state => state.themeReducer.theme)
    return (
        <View>
            <View>
                <Image 
                    source = {{ uri: image }}
                    style = {{width: "100%", height: 500}}
                    alt="person image"
                    resizeMode='cover'>
                </Image>
                <LinearGradient 
                    colors={theme === "light" ? ['rgba(0, 0, 0, 0.0)', 'rgba(255, 255, 255, 1)'] : ['rgba(255, 255, 255, 0)', 'rgba(55, 57, 61, 1)']}
                    style = {styles.imageGradient} />

            </View>
            <Text style = {{...styles.cardText, color: theme === "light" ? "#000000" : "#FFFFFF", backgroundColor: theme === "light" ? "#FFFFFF" : "#37393D"}}>{`${name} ${surname}`}</Text>
        </View>
    )
}