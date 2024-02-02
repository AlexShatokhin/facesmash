import {PersonCardTouchableOpacity, 
        PersonCardImage, 
        PersonCardTextWrapper, 
        PersonCardText} from "./PersonCard.styles"

const PersonCard = ({name, renderProps}) => {
    return (
        <PersonCardTouchableOpacity>
            <PersonCardImage />
            <PersonCardTextWrapper>
                <PersonCardText>{name}</PersonCardText>
            </PersonCardTextWrapper>
            {renderProps ? renderProps() : null}
        </PersonCardTouchableOpacity>
    )
}

export default PersonCard;