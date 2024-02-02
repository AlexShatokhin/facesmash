import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const CreateCardButton = () => {

    const {width} = useWindowDimensions();
    const CreateCardTouchableOpacity = styled.TouchableOpacity`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        margin-left: ${width - 100}px;
        border: 2px solid #008000;
        background-color: #469536;
        border-radius: 100px;
    `;
    const CreateCardText = styled.Text`
        text-align: center;
        font-size: 35px;
        color: #FFFFFF;
    `;

    return (
        <CreateCardTouchableOpacity>
            <CreateCardText>
                &#10003; 
            </CreateCardText>
        </CreateCardTouchableOpacity>
    )
}

export default CreateCardButton;