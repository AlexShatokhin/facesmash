import { View } from "react-native"
import useHttp from "../../hooks/http.hook"
import PersonCard from "../../components/PersonCard/PersonCard"
import { useEffect, useState } from "react"

const PersonComparison = () => {

    const [persons, setPersons] = useState([]);
    const {httpRequest, loading, error} = useHttp()

    useEffect(()=>{
        httpRequest("http://10.251.79.5:3300/personsComparison")
        .then(setPersons)
    }, [])

    return (
        <View style = {{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {persons.map(person => <PersonCard name = {person.name + " " + person.surname} image = {person.imageURL}/>)}
        </View>
    )
}

export default PersonComparison