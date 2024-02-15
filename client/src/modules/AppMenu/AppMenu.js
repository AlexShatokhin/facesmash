import {MenuMain, MenuSplitter, MenuItemsListWrapper} from "./AppMenu.style"
import MenuButton from "./UI/MenuButton";
import { FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

const AppMenu = ({style, initialButton}) => {

    const icons = require("../../constants/icons").default;
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
    ];

    const [activeButton, setActiveButton] = useState(+initialButton);
    return (
        <MenuMain style = {style}>
            <MenuSplitter />
            <MenuItemsListWrapper>
                <FlatList 
                    numColumns={3}
                    data = {buttons}
                    renderItem={({item}) => 
                        <MenuButton 
                            style = {activeButton === item.id ? {
                                backgroundColor: "#A0A0A040",
                            } : null}
                            key = {item.id}
                            image={item.image}
                            description={item.description}
                            isActive = {activeButton === item.id} 
                            onPress = {() => {
                                setActiveButton(item.id)
                                router.navigate({pathname: item.route, params: {id: item.id}})
                            }}/>}/>
            </MenuItemsListWrapper>
        </MenuMain>
    )
}
export default AppMenu;