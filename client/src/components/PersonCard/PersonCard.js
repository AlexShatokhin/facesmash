import {PersonCardTouchableOpacity, 
        PersonCardImage, 
        PersonCardTextWrapper, 
        PersonCardText} from "./PersonCard.styles"
import {mediumShadow} from "../../constants/shadow";

const PersonCard = ({name, image, renderProps}) => {
    return (
        <PersonCardTouchableOpacity style = {mediumShadow}>
            <PersonCardImage                     
                    source = {{ uri: image }}
                    alt="person image"
                    resizeMode='cover'/>
            <PersonCardTextWrapper>
                <PersonCardText>{name}</PersonCardText>
            </PersonCardTextWrapper>
            {renderProps ? renderProps() : null}
        </PersonCardTouchableOpacity>
    )
}

export default PersonCard;