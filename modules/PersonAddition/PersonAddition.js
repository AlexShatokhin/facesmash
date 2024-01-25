import { View } from "react-native"
import AddImageButton from "../../UI/AddImageButton"
import AppInput from "../../UI/AppInput"

const PersonAddition = () => {
    return(
        <View style = {{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 80,
                height: 200,
            }}>
            <AddImageButton />
            <View style = {{
                height: 170,
                width: 260,
                justifyContent: "space-around"
            }}>
                <AppInput placeholder={"Type person's name here"}/>
                <AppInput placeholder={"Type person's surname here"}/>
            </View>

        </View>
    )
}

export default PersonAddition;