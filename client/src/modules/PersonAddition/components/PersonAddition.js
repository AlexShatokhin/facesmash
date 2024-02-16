import { View, useWindowDimensions } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { clearForm, 
        getFormData, 
        changePopupValue, 
        changeImageData, 
        changeImageLoadedStatus } from "../slice/addPersonsSlice"

import useHttp from "../../../hooks/http.hook"

import prepareDataToFetch from "../api/preparePersonData"
import getImageData from "../helpers/getImageData"

import AddImageButton from "../UI/AddImageButton"
import AppInput from "../UI/AppInput"
import CreateCardButton from "../UI/CreateCardButton"
import { SuccessPopup, ErrorPopup } from "./AnimatedModal"

import styles from "../PersonAddition.style"

const PersonAddition = () => {

    const dispatch = useDispatch();
    const {personForm, showPopup, isImageLoaded, imageData} = useSelector(state => state);

    const imageHeader = useMemo(() => 'data:image/jpeg;base64,')
    const {httpRequest} = useHttp()
    const {height} = useWindowDimensions();

    function fetchPersonData(){
        const data = prepareDataToFetch(personForm, imageData);

        httpRequest("http://10.251.79.5:3300/persons", "POST", data, null)
        .then(res => dispatch(changePopupValue(res.status)))
        .catch(() => dispatch(changePopupValue(400)))
        .finally(() => dispatch(clearForm()))
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
          allowsEditing: true,
          aspect: [3, 4],
          quality: 1,
        });

        const isImageExist = result.assets !== null;
        if(isImageExist)
            dispatch(changeImageData(getImageData(result)));
            
        dispatch(changeImageLoadedStatus(isImageExist));   
    };



    function getPopup(){
        switch(showPopup){
            case 200:
                setTimeout(() => {dispatch(changePopupValue(0))}, 2000) 
                return <SuccessPopup />;
            case 400:
                setTimeout(() => {dispatch(changePopupValue(0))}, 2000) 
                return <ErrorPopup />;
            default: return null
        }
    }

    return(
        <View style = {{height: height - 170}}>
            <View style = {styles.createCardContainer}>
                <AddImageButton preview={isImageLoaded ? imageHeader + imageData.preview : null} onPress = {pickImage}/>
                <View style = {styles.inputsWrapper}>
                    <AppInput 
                        name = "name" 
                        value = {personForm.name} 
                        onChangeText = {(e) => dispatch(getFormData({text: e, name: "name"}))} 
                        placeholder="Name"/>

                    <AppInput 
                        name = "surname" 
                        value = {personForm.surname} 
                        onChangeText = {(e) => dispatch(getFormData({text: e, name: "surname"}))} 
                        placeholder="Surname"/>
                </View>
            </View>
            {getPopup()}
            <CreateCardButton onPress = {fetchPersonData}/>
        </View>

    )
}



export default PersonAddition;