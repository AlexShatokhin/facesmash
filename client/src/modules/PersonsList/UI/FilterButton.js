import styled from "styled-components/native";

const FilterButton = ({value, active, ...props}) => {

    const FilterTouchableOpacity = styled.TouchableOpacity`
    width: 120px;
    padding: 7px;
    border: 2px solid ${active ? "#FFFFFF" : "#A0A0A0"};
    background-color: ${active ? "#A0A0A0" : "#FFFFFF"};
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