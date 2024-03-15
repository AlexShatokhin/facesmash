import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "@/src/hooks/useTypedSelector";
import { View, ActivityIndicator } from "react-native"


import useHttp from "../../hooks/http.hook";

import { updatePersons, updateFilterIndex, toggleBottomSheet } from "./slice/personsListSlice"

import getSortType from "./helpers/getSortType"
import getPersonById from "./helpers/getPersonById";

import { URL, PORT } from "../../constants/server";

import PersonCard from "../../components/PersonCard/PersonCard"
import PersonCardList from "../../components/PersonCardList/PersonCardList"
import BottomSheet from "./components/BottomSheet";

import BottomSheetCard from "./UI/BottomSheetCard";
import FilterButton from "./UI/FilterButton"
import { PersonRating, FilterContainer, styles } from "./PersonsList.style"


const PersonsList = () => {

    const dispatch = useDispatch();
    const persons = useTypedSelector(state => state.personsListReducer.persons);
    const activeFilterIndex = useTypedSelector(state => state.personsListReducer.activeFilterIndex);
    const showBottomSheet = useTypedSelector(state => state.personsListReducer.showBottomSheet);
    const bottomSheetPersonId = useTypedSelector(state => state.personsListReducer.bottomSheetPersonId)

    const {loading, error, httpRequest} = useHttp();

    useEffect(() => getPersons(getSortType(activeFilterIndex)), [])

    function toggleFilter(value : number){
        dispatch(updateFilterIndex(value));
        if(value !== activeFilterIndex)
            getPersons(getSortType(value))
    }

    function getPersons(sortType = "alphabet"){
        dispatch(updatePersons([]));
        httpRequest(`${URL}:${PORT}/persons/${sortType}`)
        .then(res => dispatch(updatePersons(res)))
    }

    function getBottomSheetCard(){
        const {name, surname, imageURL} = getPersonById(bottomSheetPersonId, persons);
        return <BottomSheetCard name={name} surname={surname} image={imageURL}/>
    }

    return (
        <View style = {styles.mainContainer}>
            <FilterContainer>
                <FilterButton 
                    onPress = {() => toggleFilter(0)} 
                    active={activeFilterIndex === 0} 
                    value={"По алфавиту"}/>

                <FilterButton 
                    onPress = {() => toggleFilter(1)} 
                    active={activeFilterIndex === 1} 
                    value={"По очкам"}/>
                    
            </FilterContainer>
            <View style = {styles.cardContainer}>
                {loading || persons.length === 0 ? 
                    <ActivityIndicator size="large" color="#808080" />
                : 
                    <PersonCardList 
                    data = {persons}
                    renderItem={(item) => 
                        <PersonCard 
                            onPress = {() => dispatch(toggleBottomSheet(item.id))}
                            animation = {false}
                            image = {item.imageURL}
                            name = {`${item.name} ${item.surname}`} 
                            renderProps={() => <PersonRating>{item.rating}</PersonRating>}/>}
                    />
                }

            </View>
            {showBottomSheet ? 
                <BottomSheet>
                    {getBottomSheetCard()}
                </BottomSheet> 
                : null}
        </View>

    )
}


export default PersonsList