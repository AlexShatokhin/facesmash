import { View } from "react-native"
import PersonCard from "../../components/PersonCard/PersonCard"
import PersonCardList from "../../components/PersonCardList/PersonCardList"
import FilterButton from "./UI/FilterButton"
import { PersonRating, FilterContainer, styles } from "./PersonsList.style"

import useHttp from "../../hooks/http.hook";
import { useEffect, useState } from "react"

const PersonsList = () => {

    const [persons, setPersons] = useState([]);
    const {loading, error, httpRequest} = useHttp();

    useEffect(() => {
        httpRequest("http://10.251.79.5:3300/persons")
        .then(setPersons)
    }, [])

    return (
        <View style = {styles.mainContainer}>
            <FilterContainer>
                <FilterButton value={"По алфавиту"}/>
                <FilterButton value={"По очкам"}/>
            </FilterContainer>
            <View style = {styles.cardContainer}>
                {loading ? null : 
                <PersonCardList 
                data = {persons}
                renderItem={(item) => 
                    <PersonCard 
                        name = {`${item.name} ${item.surname}`} 
                        renderProps={() => <PersonRating>{item.rating}</PersonRating>}/>}
                            />}

            </View>
        </View>

    )
}

export default PersonsList