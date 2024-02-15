import { View, ActivityIndicator } from "react-native"
import PersonCard from "../../components/PersonCard/PersonCard"
import PersonCardList from "../../components/PersonCardList/PersonCardList"
import FilterButton from "./UI/FilterButton"
import { PersonRating, FilterContainer, styles } from "./PersonsList.style"

import useHttp from "../../hooks/http.hook";
import { useEffect, useState } from "react"

const PersonsList = () => {

    const [persons, setPersons] = useState([]);
    const [activeFilterIndex, setActiveFilterIndex] = useState(0);
    const {loading, error, httpRequest} = useHttp();

    useEffect(getPersons, [])

    function toggleFilter(value){
        setActiveFilterIndex(value);
        if(value !== activeFilterIndex)
            getPersons(value === 0 ? "alphabet" : "score")
    }

    function getPersons(sortType = "alphabet"){
        setPersons([]);
        httpRequest(`http://10.251.79.5:3300/persons/${sortType}`)
        .then(setPersons)
    }

    return (
        <View style = {styles.mainContainer}>
            <FilterContainer>
                <FilterButton onPress = {() => toggleFilter(0)} active={activeFilterIndex === 0} value={"По алфавиту"}/>
                <FilterButton onPress = {() => toggleFilter(1)} active={activeFilterIndex === 1} value={"По очкам"}/>
            </FilterContainer>
            <View style = {styles.cardContainer}>
                {loading || persons.length === 0 ? 
                    <ActivityIndicator size="large" color="#808080" />
                : 
                    <PersonCardList 
                    data = {persons}
                    renderItem={(item) => 
                        <PersonCard 
                            image = {item.imageURL}
                            name = {`${item.name} ${item.surname}`} 
                            renderProps={() => <PersonRating>{item.rating}</PersonRating>}/>}
                                />
                }

            </View>
        </View>

    )
}


export default PersonsList