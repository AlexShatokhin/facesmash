import { useEffect, useState } from "react"
import { View } from "react-native"

import useHttp from "../../hooks/http.hook"

import prepareDataToCompare from "./api/prepareDataToCompare"

import { URL, PORT } from "../../constants/server"

import PersonCard from "../../components/PersonCard/PersonCard"
import LoadingView from "./components/Loading"
import styles from "./PersonComparison.style"

const PersonComparison = () => {

    const [persons, setPersons] = useState([]);
    const {httpRequest, loading, error} = useHttp()

    useEffect(getPair, [])

    function getPair(){
        httpRequest(`${URL}:${PORT}/personsComparison`)
        .then(setPersons)
    }

    function comparePersons(personID){
        setPersons([]);
        
        httpRequest(`${URL}:${PORT}/personsComparison`, "PUT", JSON.stringify(prepareDataToCompare(persons, personID)))
        .then(getPair)
    }

    function renderCards(){
        return persons.map(person => 
            <PersonCard 
                animation = {false}
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