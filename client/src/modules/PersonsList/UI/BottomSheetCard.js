import {View, Text, Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { styles } from "../PersonsList.style"

export default function BottomSheetCard({name, surname, image}) {
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
                    colors={['rgba(0, 0, 0, 0.0)', 'rgba(255, 255, 255, 1)']}
                    style = {styles.imageGradient} />

            </View>
            <Text style = {styles.cardText}>{`${name} ${surname}`}</Text>
        </View>
    )
}