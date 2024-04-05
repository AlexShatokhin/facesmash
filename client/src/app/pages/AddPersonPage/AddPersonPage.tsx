import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import AppMenu from "../../../modules/AppMenu/AppMenu"
import AddPerson from "../../../modules/PersonAddition/PersonAddition";
import store from "../../../store/store";

import ProfileMenu from "@/src/components/ProfileMenu/ProfileMenu";
import AppSafeAreaView from "../../../components/SafeAreaView/SafeAreaViewStyled";


const AddPersonPage = () => {
    const {id} = useLocalSearchParams() as {id: string};

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView>

                    <ProfileMenu />
                    <AddPerson />
                    <AppMenu initialButton={id}/>
                    
                </AppSafeAreaView>
            </Provider>
        </SafeAreaProvider>

    )
}


export default AddPersonPage