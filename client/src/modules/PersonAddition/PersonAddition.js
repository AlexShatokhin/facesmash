import { View, useWindowDimensions } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"

import styles from "./PersonAddition.style"
import AddImageButton from "./UI/AddImageButton"
import AppInput from "./UI/AppInput"
import CreateCardButton from "./UI/CreateCardButton"

const PersonAddition = () => {
    const [personForm, setPersonForm] = useState({
        name: "",
        surname: ""
    });
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [preview, setPreview] = useState("");
    const {height} = useWindowDimensions();

    function getFormData(text, name){
        setPersonForm(form => ({...form, [name]: text}))
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
          allowsEditing: true,
          aspect: [3, 4],
          quality: 1,
        });
        
        if(result.assets !== null){
            setIsImageLoaded(true);
            setPreview(result.assets[0].base64)
        } else {
            setIsImageLoaded(false);
        }
    };

    return(
        <View style = {{height: height - 170}}>
            <View style = {styles.createCardContainer}>
                <AddImageButton preview={isImageLoaded ? preview : null} onPress = {pickImage}/>
                
                <View style = {styles.inputsWrapper}>
                    <AppInput 
                        name = "name" 
                        value = {personForm.name} 
                        onChangeText = {(e) => getFormData(e, "name")} 
                        placeholder="Name"/>

                    <AppInput 
                        name = "surname" 
                        value = {personForm.surname} 
                        onChangeText = {(e) => getFormData(e, "surname")} 
                        placeholder="Surname"/>
                </View>
            </View>
            <CreateCardButton />
        </View>

    )
}



export default PersonAddition;