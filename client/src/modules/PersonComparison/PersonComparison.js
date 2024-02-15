import { View } from "react-native"
import useHttp from "../../hooks/http.hook"
import PersonCard from "../../components/PersonCard/PersonCard"
import SkeletonComponent from "../../UI/Skeleton"
import { useEffect, useState } from "react"

const PersonComparison = () => {

    const [persons, setPersons] = useState([]);
    const {httpRequest, loading, error} = useHttp()

    useEffect(getPair, [])

    function getPair(){
        httpRequest("http://10.251.79.5:3300/personsComparison")
        .then(setPersons)
    }

    function comparePersons(personID){
        const comparisonResults = {
            persons: persons.map(person => person.id),
            choosenPerson: personID
        }
        setPersons([]);
        httpRequest("http://10.251.79.5:3300/personsComparison", "PUT", JSON.stringify(comparisonResults))
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
        <View style = {{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {loading || persons.length === 0 ? <LoadingView /> : !error ? renderCards() : null}
        </View>
    )
}

const LoadingView = () => {
    return (
        <>
            <SkeletonComponent style = {{marginRight: 10, marginTop: -10, marginLeft: -5}}/>
            <SkeletonComponent style = {{marginRight: 10, marginTop: -10, marginLeft: -5}} />
        </>
    )
}

export default PersonComparison