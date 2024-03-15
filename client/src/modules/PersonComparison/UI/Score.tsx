import { FC } from "react"
import {Text} from "react-native"
import Animated, {FadeInDown, FadeOutUp} from "react-native-reanimated"
import {styles} from "../PersonComparison.style"

type ScoreProps = {
    value: number,
    type: "positive" | "negative"
}

const Score : FC<ScoreProps> = ({value, type}) => {
    return (
        <Animated.View 
            entering={FadeInDown.duration(200).springify().damping(9)} 
            exiting={FadeOutUp.duration(200).springify().damping(9)}>

            <Text style = {type === "negative" ? styles.negativeScore : styles.positiveScore}>
                {type === "negative" ? "-" : "+"} {value}
            </Text>

        </Animated.View>
    )
}

export default Score;