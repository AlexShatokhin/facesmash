import styled from "styled-components/native";

const InputStyled = styled.TextInput`
    min-height: 50px;
    font-size: 16px;
    padding: 5px 15px;
    background-color: #F4F4FB;
    border-radius: 10px;
`

const AppInput = ({placeholder, ...props}) => {
    return (
        <InputStyled 
            {...props}
            placeholder={placeholder}/>
    )
}

export default AppInput;