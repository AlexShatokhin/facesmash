import {PersonCardTouchableOpacity, 
        PersonCardImage, 
        PersonCardTextWrapper, 
        PersonCardText} from "./PersonCard.styles"

const PersonCard = ({name}) => {
    return (
        <PersonCardTouchableOpacity>
            <PersonCardImage />
            <PersonCardTextWrapper>
                <PersonCardText>{name}</PersonCardText>
            </PersonCardTextWrapper>
        </PersonCardTouchableOpacity>
    )
}

export default PersonCard;