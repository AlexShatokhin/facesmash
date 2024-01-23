import {PersonCardTouchableOpacity, 
        PersonCardImage, 
        PersonCardTextWrapper, 
        PersonCardText} from "./PersonCard.styles"

const PersonCard = () => {
    return (
        <PersonCardTouchableOpacity>
            <PersonCardImage />
            <PersonCardTextWrapper>
                <PersonCardText>Name Surname</PersonCardText>
            </PersonCardTextWrapper>
        </PersonCardTouchableOpacity>
    )
}

export default PersonCard;