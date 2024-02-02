import styled from "styled-components/native";

const FilterTouchableOpacity = styled.TouchableOpacity`
    width: 120px;
    padding: 7px;
    border: 2px solid #A0A0A0;
    border-radius: 100px;
`

const FilterText = styled.Text`
    font-size: 15px;
    color: #A0A0A0;
    font-weight: 700;
    text-align: center;
`

const FilterButton = ({value}) => {

    return (
        <FilterTouchableOpacity>
            <FilterText>{value}</FilterText>
        </FilterTouchableOpacity>
    )

}

export default FilterButton;