import { FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";

import getButtons from "./data/buttons";

import {MenuMain, MenuSplitter, MenuItemsListWrapper, styles} from "./AppMenu.style"
import MenuButton from "./UI/MenuButton";

const AppMenu = ({initialButton, style}) => {

    const [activeButton, setActiveButton] = useState(+initialButton);
    const theme = useSelector(state => state.themeReducer.theme);
    return (
        <MenuMain style = {{...style, elevation: -5}}>
            <MenuSplitter />
            <MenuItemsListWrapper>
                <FlatList 
                    numColumns={3}
                    data = {getButtons(theme)}
                    renderItem={({item}) => 
                        <MenuButton 
                            style = {activeButton === item.id ? styles.activeButton : null}
                            key = {item.id}
                            image={item.image}
                            description={item.description}
                            isActive = {activeButton === item.id} 
                            theme = {theme}
                            onPress = {() => {
                                setActiveButton(item.id)
                                router.navigate({pathname: item.route, params: {id: item.id}})
                            }}/>}/>
            </MenuItemsListWrapper>
        </MenuMain>
    )
}
export default AppMenu;