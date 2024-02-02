import { View, useWindowDimensions } from "react-native"
import styles from "./PersonAddition.style"
import AddImageButton from "./UI/AddImageButton"
import AppInput from "./UI/AppInput"
import CreateCardButton from "./UI/CreateCardButton"

const PersonAddition = () => {
    const {height} = useWindowDimensions()
    return(
        <View style = {{height: height - 170}}>
            <View style = {styles.createCardContainer}>
                <AddImageButton />
                <View style = {styles.inputsWrapper}>
                    <AppInput placeholder={"Type person's name here"}/>
                    <AppInput placeholder={"Type person's surname here"}/>
                </View>
            </View>
            <CreateCardButton />
        </View>

    )
}



export default PersonAddition;