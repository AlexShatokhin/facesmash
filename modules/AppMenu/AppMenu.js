import {MenuMain, MenuSplitter, MenuItemsListWrapper} from "./AppMenu.style"
import MenuButton from "../../UI/MenuButton";
import { FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

const AppMenu = ({style, initialButton}) => {

    const buttons = [
        {
            id: 1,
            image: require("../../assets/icons/users.png"),
            description: "Сравнение",
            isActive: 1 === initialButton
        },
        {
            id: 2,
            image: require("../../assets/icons/rating.png"),
            description: "Рейтинг",
            isActive: 2 === initialButton
        },
        {
            id: 3,
            image: require("../../assets/icons/add_user.png"),
            description: "Новый участник",
            isActive: 3 === initialButton
        }
    ];

    const [activeButton, setActiveButton] = useState(initialButton);
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
                                backgroundColor: "#90101060",
                            } : null}
                            key = {item.id}
                            image={item.image}
                            description={item.description}
                            isActive = {activeButton === item.id} 
                            onPress = {() => {
                                router.replace(`/${item.id}`)
                                setActiveButton(item.id)
                            }}/>}/>
            </MenuItemsListWrapper>
        </MenuMain>
    )
}
export default AppMenu;