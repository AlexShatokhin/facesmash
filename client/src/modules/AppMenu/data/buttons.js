const icons = require("../constants/constants").default;

function getButtons(theme){
    return buttons = [
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