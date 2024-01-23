import styled from "styled-components/native";

const FilterTouchableOpacity = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    border: 3px solid #A0A0A0;
    border-radius: 100px;
`

const FilterText = styled.Text`
    font-size: 15px;
    color: #A0A0A0;
    font-weight: 700;
`

const FilterButton = ({value}) => {

    return (
        <FilterTouchableOpacity>
            <FilterText>{value}</FilterText>
        </FilterTouchableOpacity>
    )

}

export default FilterButton;