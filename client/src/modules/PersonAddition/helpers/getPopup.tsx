import { changePopupValue } from "../slice/addPersonsSlice";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/src/hooks/useTypedSelector";
import {SuccessPopup, ErrorPopup} from "../components/AnimatedModal"

export default function getPopup(): JSX.Element | null{

    const dispatch = useDispatch();
    const showPopup = useTypedSelector(state => state.addPersonsReducer.showPopup)

    setTimeout(() => {dispatch(changePopupValue(0))}, 2000) 

    switch(showPopup){
        case 200: return <SuccessPopup />;
        case 400: return <ErrorPopup />;
        default: return null
    }
}