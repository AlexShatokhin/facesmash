import { useEffect, useState } from "react"
import { View } from "react-native"

import useHttp from "../../hooks/http.hook"

import prepareDataToCompare from "./api/prepareDataToCompare"

import { URL, PORT } from "../../constants/server"

import PersonCard from "../../components/PersonCard/PersonCard"
import LoadingView from "./UI/Loading"
import Score from "./UI/Score"

import {styles} from "./PersonComparison.style"
import { personCardType } from "@/src/types/personCardType"

type showScoreAnimationType = {
    persons: number[];
    chosenPerson: number;
}

const PersonComparison = () => {

    const [persons, setPersons] = useState<personCardType[]>([]);
    const [showScoreAnimation, setShowScoreAnimation] = useState<showScoreAnimationType | null>(null);
    const [personsCompared, setPersonsCompared] = useState(false);
    const {httpRequest, loading, error} = useHttp()

    useEffect(getPair, [])

    function getPair(){
        httpRequest(`${URL}:${PORT}/personsComparison`)
        .then(setPersons)
    }

    function togglePersonsCompared(){
        setPersonsCompared(prev => !prev);
    }

    function comparePersons(personID: number){
        
        togglePersonsCompared();
        setShowScoreAnimation(prepareDataToCompare(persons, personID));
        setTimeout(() => {
            setShowScoreAnimation(null);
            setPersons([]);
            
            httpRequest(`${URL}:${PORT}/personsComparison`, "PUT", JSON.stringify(prepareDataToCompare(persons, personID)))
            .then(getPair)
            .then(togglePersonsCompared)
        }, 600)

    }

    function renderCards(){
        return persons.map(person => 
            <View key = {person.id}>
                {
                    showScoreAnimation ? 
                        showScoreAnimation.chosenPerson === person.id ? 
                            <Score type={"positive"} value={10}/> 
                            : 
                            <Score type={"negative"} value = {10}/> 
                        : null
                }
                <PersonCard 
                    disabled = {personsCompared}
                    animation = {false}
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