import { useDispatch} from "react-redux";

import { toggleBottomSheet } from "../slice/personsListSlice";

import Animated, {SlideInDown, SlideOutDown, FadeIn, FadeOut} from "react-native-reanimated";
import { Text, useWindowDimensions, Pressable } from "react-native";

import {styles} from "../PersonsList.style"

const BottomSheet = (props) => {

    const dispatch = useDispatch();
    const {width} = useWindowDimensions();
    const Touchable = Animated.createAnimatedComponent(Pressable)

    return (
        <Touchable 
            entering={FadeIn} 
            exiting={FadeOut}
            onPress={() => dispatch(toggleBottomSheet())} 
            style = {styles.sheet}>

            <Animated.View 
                entering={SlideInDown.springify().damping(20)} 
                exiting={SlideOutDown.springify().damping(20)}
                style = {{...styles.sheetContent, width: width - 10}}>
                {props.children}
            </Animated.View>
        </Touchable>

    )
}

export default BottomSheet;