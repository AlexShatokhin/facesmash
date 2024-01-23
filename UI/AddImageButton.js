import { Text } from "react-native"
import styled from "styled-components/native"

const AddImageTouchableOpacity = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 160px;
    border-radius: 10px;
    background-color: #A0A0A0;
`
const AddImagePlus = styled.Text`
    font-size: 70px;
    color: #808080;
`

const AddImageButton = () => {

    return (
        <AddImageTouchableOpacity>
            <AddImagePlus>
                +
            </AddImagePlus>
        </AddImageTouchableOpacity>
    )

}

export default AddImageButton;