import { FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import buttons from "./data/buttons";

import {MenuMain, MenuSplitter, MenuItemsListWrapper, styles} from "./AppMenu.style"
import MenuButton from "./UI/MenuButton";

const AppMenu = ({style, initialButton}) => {

    const [activeButton, setActiveButton] = useState(+initialButton);
    return (
        <MenuMain style = {{...style, elevation: -5}}>
            <MenuSplitter />
            <MenuItemsListWrapper>
                <FlatList 
                    numColumns={3}
                    data = {buttons}
                    renderItem={({item}) => 
                        <MenuButton 
                            style = {activeButton === item.id ? styles.activeButton : null}
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