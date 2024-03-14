import { FC } from "react";
import styled from "styled-components/native";

const InputStyled = styled.TextInput`
    min-height: 50px;
    font-size: 16px;
    padding: 5px 15px;
    background-color: #F4F4FB;
    border-radius: 10px;
`

type AppInputProps = {
    name: string,
    value: string,
    placeholder: string,
    onChangeText: (e: string) => void
}

const AppInput : FC<AppInputProps> = ({placeholder, ...props}) => {
    return (
        <InputStyled 
            {...props}
            placeholder={placeholder}/>
    )
}

export default AppInput;