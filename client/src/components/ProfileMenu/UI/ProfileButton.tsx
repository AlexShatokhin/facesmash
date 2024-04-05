import { FC } from "react";
import { TouchableOpacity } from "react-native";
import {styles} from '../profileButton.style';

type SmallProfileButtonProps = {
    children?: React.ReactNode,
    type: "small" | "large",
    onPress?: () => void
}

const SmallProfileButton :FC<SmallProfileButtonProps> = ({children, type, ...props}) => {
    return (
        <TouchableOpacity {...props} 
            style = {type === "small" ? 
            styles.buttonSmall : {...styles.buttonSmall, ...styles.buttonLarge}}>
            {children}
        </TouchableOpacity>
    )
}

export default SmallProfileButton;