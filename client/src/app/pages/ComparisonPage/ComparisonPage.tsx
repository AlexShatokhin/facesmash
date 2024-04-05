import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Provider } from "react-redux";

import AppMenu from "../../../modules/AppMenu/AppMenu"
import PersonComparison from "../../../modules/PersonComparison/PersonComparison";
import store from "../../../store/store";

import SwitchThemeButton from "../../../components/ThemeButton/ThemeButton";
import ProfileButton from "@/src/components/ProfileMenu/ProfileMenu";
import AppSafeAreaView from "../../../components/SafeAreaView/SafeAreaViewStyled";

const ComparisonPage = () => {
    const {id} = useLocalSearchParams() as {id: string};

    return (    
        <SafeAreaProvider>
            <Provider store={store}>
                <AppSafeAreaView>

                    <ProfileButton />
                    <PersonComparison />
                    <AppMenu initialButton={id}/>
                    
                </AppSafeAreaView>
            </Provider>
        </SafeAreaProvider>

    )
}


export default ComparisonPage