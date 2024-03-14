import { FC, ReactElement } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import {PersonCardTouchableOpacity, 
        PersonCardImage, 
        PersonCardTextWrapper, 
        PersonCardText} from "./PersonCard.styles"
import {mediumShadow} from "../../constants/shadow";

type PersonCardProps = {
    name: string,
    image: string,
    renderProps?: () => ReactElement
}

const PersonCard : FC<PersonCardProps> = ({name, image, renderProps, ...props}) => {
    const theme = useTypedSelector(state => state.themeReducer.theme);
    return (
        <PersonCardTouchableOpacity {...props} style = {mediumShadow}>
            <PersonCardImage                     
                    source = {{ uri: image }}
                    alt="person image"
                    resizeMode='cover'/>
            <PersonCardTextWrapper style = {{backgroundColor: theme === "light" ? "#333333" : "#F0F8FF"}}>
                <PersonCardText style = {{color: theme === "light" ? "#FFFFFF" : "#333333"}}>{name}</PersonCardText>
            </PersonCardTextWrapper>
            {renderProps ? renderProps() : null}
        </PersonCardTouchableOpacity>
    )
}

export default PersonCard;