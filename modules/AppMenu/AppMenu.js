import {MenuMain, MenuSplitter, MenuItemsListWrapper} from "./AppMenu.style"
import MenuButton from "../../UI/MenuButton";
import { FlatList } from "react-native";

const AppMenu = () => {

    const buttons = [
        <MenuButton
        image={require("../../assets/icons/users.png")}
        description={"Сравнение"}/>,

        <MenuButton
        image={require("../../assets/icons/rating.png")}
        description={"Рейтинг"}/>,

        <MenuButton
        image={require("../../assets/icons/add_user.png")}
        description={"Новый участник"}/>,
    ]

    return (
        <MenuMain>
            <MenuSplitter />
            <MenuItemsListWrapper>
                <FlatList 
                    numColumns={3}
                    data = {buttons}
                    renderItem={({item}) => item}/>
            </MenuItemsListWrapper>
        </MenuMain>
    )
}
export default AppMenu;