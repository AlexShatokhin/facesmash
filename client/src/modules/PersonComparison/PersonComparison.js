import { useEffect, useState } from "react"
import { View } from "react-native"

import useHttp from "../../hooks/http.hook"

import prepareDataToCompare from "./api/prepareDataToCompare"

import { URL, PORT } from "../../constants/server"

import PersonCard from "../../components/PersonCard/PersonCard"
import LoadingView from "./UI/Loading"
import Score from "./UI/Score"

import styles from "./PersonComparison.style"

const PersonComparison = () => {

    const [persons, setPersons] = useState([]);
    const [showScoreAnimation, setShowScoreAnimation] = useState(null)
    const {httpRequest, loading, error} = useHttp()

    useEffect(getPair, [])

    function getPair(){
        httpRequest(`${URL}:${PORT}/personsComparison`)
        .then(setPersons)
    }

    function comparePersons(personID){

        setShowScoreAnimation(prepareDataToCompare(persons, personID));
        setTimeout(() => {
            setShowScoreAnimation(null);
            setPersons([]);
            
            httpRequest(`${URL}:${PORT}/personsComparison`, "PUT", JSON.stringify(prepareDataToCompare(persons, personID)))
            .then(getPair)
        }, 600)

    }

    function renderCards(){
        return persons.map(person => 
            <View>
                {
                    showScoreAnimation ? 
                        showScoreAnimation.chosenPerson === person.id ? 
                            <Score type={"positive"} value={10}/> 
                            : 
                            <Score type={"negative"} value = {10}/> 
                        : null
                }
                <PersonCard 
                    animation = {false}
                    key = {person.id}
                    onPress = {() => comparePersons(person.id)}
                    name = {person.name + " " + person.surname} 
                    image = {person.imageURL}/>                
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            {loading || persons.length === 0 ? <LoadingView /> : !error ? renderCards() : null}
        </View>
    )
}



export default PersonComparison