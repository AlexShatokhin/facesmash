import {PersonCardTouchableOpacity, 
        PersonCardImage, 
        PersonCardTextWrapper, 
        PersonCardText} from "./PersonCard.styles"
import {mediumShadow, smallShadow} from "../../constants/shadow";

const PersonCard = ({name, renderProps}) => {
    return (
        <PersonCardTouchableOpacity style = {mediumShadow}>
            <PersonCardImage />
            <PersonCardTextWrapper>
                <PersonCardText>{name}</PersonCardText>
            </PersonCardTextWrapper>
            {renderProps ? renderProps() : null}
        </PersonCardTouchableOpacity>
    )
}

export default PersonCard;