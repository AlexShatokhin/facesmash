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

    function renderCards(){
        return persons.map(person => 
            <PersonCard 
                onPress = {getPair}
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
            {loading ? <LoadingView /> : !error ? renderCards() : null}
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