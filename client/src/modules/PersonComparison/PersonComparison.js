import { View } from "react-native"
import PersonCard from "../../components/PersonCard/PersonCard"

const PersonComparison = ({persons}) => {
    return (
        <View style = {{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {persons.map(person => <PersonCard {...person}/>)}
        </View>
    )
}

export default PersonComparison