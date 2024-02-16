const icons = require("../constants/constants").default;;

const buttons = [
    {
        id: 1,
        image: icons.users,
        description: "Сравнение",
        route: "pages/ComparisonPage/ComparisonPage"
    },
    {
        id: 2,
        image: icons.rating,
        description: "Рейтинг",
        route: "pages/RatingPage/RatingPage"
    },
    {
        id: 3,
        image: icons.add_user,
        description: "Новый участник",
        route: "pages/AddPersonPage/AddPersonPage"
    }
]

export default buttons