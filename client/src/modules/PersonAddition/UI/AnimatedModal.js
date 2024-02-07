import Popup from "../../../UI/Popup"

export const SuccessPopup = () => {
    return <Popup text={"Person was added successfully!"}/>
}

export const ErrorPopup = () => {
    return <Popup text={"Oops! Something went wrong..."}/>
}