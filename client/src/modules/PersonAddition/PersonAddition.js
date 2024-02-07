import { View, useWindowDimensions } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"

import useHttp from "../../hooks/http.hook"

import styles from "./PersonAddition.style"
import AddImageButton from "./UI/AddImageButton"
import AppInput from "./UI/AppInput"
import CreateCardButton from "./UI/CreateCardButton"
import { SuccessPopup, ErrorPopup } from "./UI/AnimatedModal"

const PersonAddition = () => {
    const [personForm, setPersonForm] = useState({
        name: "",
        surname: ""
    });
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [showPopup, setShowPopup] = useState(null);
    const [preview, setPreview] = useState("");
    
    const {loading, error, httpRequest} = useHttp()
    const {height} = useWindowDimensions();

    function fetchPersonData(){
        const fetchData = JSON.stringify({
            ...personForm,
            image: preview
        })
        httpRequest("http://10.251.79.5:3300/persons", "POST", fetchData)
        .then(res => setShowPopup(res.status))
        .catch(res => setShowPopup(400))
        clearForm();
    }

    function clearForm(){
        setPersonForm({name: "", surname: ""});
        setIsImageLoaded(false);
        setPreview("");
    }

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
            setPreview('data:image/jpeg;base64,' + result.assets[0].base64)
        } else {
            setIsImageLoaded(false);
        }
    };

    function getPopup(){
        switch(showPopup){
            case 200:
                setTimeout(setShowPopup, 2000, null) 
                return <SuccessPopup />;
            case 400:
                setTimeout(setShowPopup, 2000, null) 
                return <ErrorPopup />;
            default: return null
        }
    }

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
            {getPopup()}
            <CreateCardButton onPress = {fetchPersonData}/>
        </View>

    )
}



export default PersonAddition;