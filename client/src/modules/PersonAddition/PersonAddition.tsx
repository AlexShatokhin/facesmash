import { View, useWindowDimensions } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "@/src/hooks/useTypedSelector"

import { clearForm, 
        getFormData, 
        changePopupValue, 
        changeImageData, 
        changeImageLoadedStatus } from "./slice/addPersonsSlice"

import useHttp from "../../hooks/http.hook"

import { URL, PORT } from "../../constants/server"

import prepareDataToFetch from "./api/preparePersonData"
import getImageData from "./helpers/getImageData"
import getPopup from "./helpers/getPopup"

import AddImageButton from "./UI/AddImageButton"
import AppInput from "./UI/AppInput"
import CreateCardButton from "./UI/CreateCardButton"

import {styles} from "./PersonAddition.style"
import { addPersonCardImageType } from "@/src/types/addPersonCardType"

const PersonAddition = () => {

    const dispatch = useDispatch();
    const personForm = useTypedSelector(state => state.addPersonsReducer.personForm);
    const isImageLoaded = useTypedSelector(state => state.addPersonsReducer.isImageLoaded);
    const imageData = useTypedSelector(state => state.addPersonsReducer.imageData) as addPersonCardImageType;

    const imageHeader = useMemo(() => 'data:image/jpeg;base64,', [])
    const {httpRequest} = useHttp()
    const {height} = useWindowDimensions();

    function fetchPersonData(){
        const data = prepareDataToFetch(personForm, imageData);

        httpRequest(`${URL}:${PORT}/persons`, "POST", data, null)
        .then(res => dispatch(changePopupValue(res.status)))
        .catch(() => dispatch(changePopupValue(400)))
        .finally(() => dispatch(clearForm()))
    }

    async function pickImage() {
        let result  = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
          allowsEditing: true,
          aspect: [3, 4],
          quality: 1,
        });

        const isImageExist = result.assets !== null;
        if(isImageExist)
            dispatch(changeImageData(getImageData(result as ImagePicker.ImagePickerSuccessResult)));
            
        dispatch(changeImageLoadedStatus(isImageExist));   
    };


    return(
        <View style = {{height: height - 170}}>
            <View style = {styles.createCardContainer}>
                <AddImageButton 
                    preview={isImageLoaded ? imageHeader + imageData.preview : null} 
                    onPress = {pickImage}/>

                <View style = {styles.inputsWrapper}>
                    <AppInput 
                        name = "name" 
                        value = {personForm.name} 
                        onChangeText = {(e : string) => dispatch(getFormData({text: e, name: "name"}))} 
                        placeholder="Name"/>

                    <AppInput 
                        name = "surname" 
                        value = {personForm.surname} 
                        onChangeText = {(e : string) => dispatch(getFormData({text: e, name: "surname"}))} 
                        placeholder="Surname"/>
                </View>
            </View>
            {getPopup()}
            <CreateCardButton onPress = {fetchPersonData}/>
        </View>

    )
}


export default PersonAddition;