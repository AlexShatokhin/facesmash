import { FC } from "react";
import { useDispatch} from "react-redux";

import { toggleBottomSheet } from "../slice/personsListSlice";

import Animated, {SlideInDown, SlideOutDown, FadeIn, FadeOut} from "react-native-reanimated";
import { useWindowDimensions, Pressable } from "react-native";

import {styles} from "../PersonsList.style"

type BottomSheetProps = {
    children: React.ReactNode | React.ReactNode[]
}

const BottomSheet : FC<BottomSheetProps> = (props) => {

    const dispatch = useDispatch();
    const {width} = useWindowDimensions();
    const Touchable = Animated.createAnimatedComponent(Pressable)

    return (
        <Touchable 
            entering={FadeIn} 
            exiting={FadeOut}
            onPress={() => dispatch(toggleBottomSheet(0))} 
            style = {styles.sheet}>

            <Animated.View 
                entering={SlideInDown.springify().damping(17).mass(1)} 
                exiting={SlideOutDown.springify().damping(17).mass(1)}
                style = {{...styles.sheetContent, width: width - 10}}>
                {props.children}
            </Animated.View>
        </Touchable>

    )
}

export default BottomSheet;