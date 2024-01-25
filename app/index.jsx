import { ScrollView, StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import NavigationButton from "../UI/NavigationButton"
import MenuButton from "../UI/MenuButton"
import FilterButton from "../UI/FilterButton"
import AppInput from "../UI/AppInput"
import AddImageButton from "../UI/AddImageButton"
import PersonCard from "../components/PersonCard/PersonCard"
import PersonCardList from "../components/PersonCardList/PersonCardList";
import AppMenu from "../modules/AppMenu/AppMenu"
import HomePage from "./pages/HomePage/HomePage"

export default function Page() {
	const {height} = useWindowDimensions();
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				{/* <View>
					<AppMenu />
					<PersonCardList 
						data = {[{name: "Robert Polsen"}, {name: "Robert Polsen"}, {name: "Robert Polsen"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}, {name: "Brad Pitt"}]}
						renderItem={(item) => <PersonCard name = {item.name}/>}
					/>
					<NavigationButton />

					<FilterButton 
						value={"По алфавиту"}/>
					<AppInput 
						placeholder={"Type anything..."}/>
					<AddImageButton />

					<Text style={styles.title}>Hello World</Text>
					<Text style={styles.subtitle}>This is the first page of your app.</Text>					
				</View> */}
				<View>				
					<HomePage />
				</View>
			</SafeAreaView>

		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
