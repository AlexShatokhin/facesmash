import { View } from "react-native"
import PersonCard from "../../components/PersonCard/PersonCard"
import PersonCardList from "../../components/PersonCardList/PersonCardList"

const PersonsList = () => {
    return (
        <View style = {{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <PersonCardList 
                data = {[{name: "Robert Polsen"}, {name: "Robert Polsen"}, {name: "Robert Polsen"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}]}
                renderItem={(item) => <PersonCard name = {item.name}/>}
            />
        </View>
    )
}

export default PersonsList