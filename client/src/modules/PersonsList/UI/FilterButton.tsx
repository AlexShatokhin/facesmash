import { FC } from "react";
import styled from "styled-components/native";

type FilterButtonProps = {
    value: string,
    active: boolean,
    onPress: () => void
}

const FilterButton : FC<FilterButtonProps> = ({value, active, ...props}) => {

    const FilterTouchableOpacity = styled.TouchableOpacity`
    width: 120px;
    padding: 7px;
    border: 2px solid ${active ? "#FFFFFF00" : "#A0A0A0"};
    background-color: ${active ? "#A0A0A0" : "none"};
    border-radius: 100px;
    `

    const FilterText = styled.Text`
        font-size: 15px;
        color: ${active ? "#FFFFFF" : "#A0A0A0"};
        font-weight: 700;
        text-align: center;
    `


    return (
        <FilterTouchableOpacity {...props}>
            <FilterText>{value}</FilterText>
        </FilterTouchableOpacity>
    )

}

export default FilterButton;