import { changePopupValue } from "../slice/addPersonsSlice";
import { useDispatch, useSelector } from "react-redux";
import {SuccessPopup, ErrorPopup} from "../components/AnimatedModal"

export default function getPopup(){

    const dispatch = useDispatch();
    const showPopup = useSelector(state => state.showPopup)

    setTimeout(() => {dispatch(changePopupValue(0))}, 2000) 

    switch(showPopup){
        case 200: return <SuccessPopup />;
        case 400: return <ErrorPopup />;
        default: return null
    }
}