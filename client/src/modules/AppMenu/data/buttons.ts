import { ImageSourcePropType } from "react-native";

const icons = require("../constants/constants").default;

type ButtonType = {
    id: number,
    image: ImageSourcePropType,
    description: string,
    route: string

}

function getButtons(theme : string) : Array<ButtonType>{
    return [
        {
            id: 1,
            image: theme === "light" ? icons.users : icons.users__light,
            description: "Сравнение",
            route: "pages/ComparisonPage/ComparisonPage"
        },
        {
            id: 2,
            image: theme === "light" ? icons.rating : icons.rating__light,
            description: "Рейтинг",
            route: "pages/RatingPage/RatingPage"
        },
        {
            id: 3,
            image:  theme === "light" ?  icons.add_user : icons.add_user__light,
            description: "Новый участник",
            route: "pages/AddPersonPage/AddPersonPage"
        }
    ]
    

}


export default getButtons