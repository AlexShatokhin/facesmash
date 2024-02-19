import { useEffect, useState } from "react"
import { View } from "react-native"

import useHttp from "../../hooks/http.hook"

import prepareDataToCompare from "./api/prepareDataToCompare"

import PersonCard from "../../components/PersonCard/PersonCard"
import LoadingView from "./components/Loading"
import styles from "./PersonComparison.style"

const PersonComparison = () => {

    const [persons, setPersons] = useState([]);
    const {httpRequest, loading, error} = useHttp()

    useEffect(getPair, [])

    function getPair(){
        httpRequest("http://10.251.79.5:3300/personsComparison")
        .then(setPersons)
    }

    function comparePersons(personID){
        setPersons([]);
        
        httpRequest("http://10.251.79.5:3300/personsComparison", "PUT", JSON.stringify(prepareDataToCompare(persons, personID)))
        .then(getPair)
    }

    function renderCards(){
        return persons.map(person => 
            <PersonCard 
                key = {person.id}
                onPress = {() => comparePersons(person.id)}
                name = {person.name + " " + person.surname} 
                image = {person.imageURL}/>)
    }

    return (
        <View style = {styles.container}>
            {loading || persons.length === 0 ? <LoadingView /> : !error ? renderCards() : null}
        </View>
    )
}



export default PersonComparison