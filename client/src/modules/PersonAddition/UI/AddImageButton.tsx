import { FC } from "react"
import { Image } from "react-native"
import styled from "styled-components/native"

const AddImageTouchableOpacity = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 110px;
    height: 160px;
    border-radius: 10px;
    background-color: #A0A0A0;
`
const AddImagePlus = styled.Text`
    font-size: 70px;
    color: #808080;
`

type AddImageButtonProps = {
    preview: string | null,
    onPress: () => void
}

const AddImageButton : FC<AddImageButtonProps> = ({preview, ...props}) => {

    return (
        <AddImageTouchableOpacity {...props}>
            {preview ?  
                <Image 
                    source = {{ uri: preview }}
                    alt="person image"
                    style = {{width: 110, height: 160}}
                    resizeMode='cover'/>  :
                <AddImagePlus>+</AddImagePlus>

            }

        </AddImageTouchableOpacity>
    )

}

export default AddImageButton;