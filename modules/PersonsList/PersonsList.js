import { View } from "react-native"
import PersonCard from "../../components/PersonCard/PersonCard"
import PersonCardList from "../../components/PersonCardList/PersonCardList"
import FilterButton from "./UI/FilterButton"
import { PersonRating, FilterContainer, styles } from "./PersonsList.style"

const PersonsList = () => {
    return (
        <View style = {styles.mainContainer}>
            <FilterContainer>
                <FilterButton value={"По алфавиту"}/>
                <FilterButton value={"По очкам"}/>
            </FilterContainer>
            <View style = {styles.cardContainer}>
                <PersonCardList 
                    data = {[{name: "Robert Polsen"}, {name: "Robert Polsen"}, {name: "Robert Polsen"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}]}
                    renderItem={(item) => 
                        <PersonCard 
                            name = {item.name} 
                            renderProps={() => <PersonRating>999</PersonRating>}/>}
                />
            </View>
        </View>

    )
}

export default PersonsList