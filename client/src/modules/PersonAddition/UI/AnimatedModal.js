import Popup from "../../../UI/Popup"

export const SuccessPopup = () => {
    const image = require("../../../constants").icons.success
    return <Popup image={image} text={"Person was added successfully!"}/>
}

export const ErrorPopup = () => {
    const image = require("../../../constants").icons.fail
    return <Popup image = {image} text={"Oops! Something went wrong..."}/>
}