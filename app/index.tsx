import { StyleSheet, Text, View } from "react-native";

import NavigationButton from "../UI/NavigationButton"
import MenuButton from "../UI/MenuButton"
import FilterButton from "../UI/FilterButton"
import AppInput from "../UI/AppInput"
import AddImageButton from "../UI/AddImageButton"
import PersonCard from "../components/PersonCard/PersonCard"

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<PersonCard />
				<NavigationButton />
				<MenuButton
					image={require("../assets/icons/users.png")}
					description={"Сравнение"}/>
				<FilterButton 
					value={"По алфавиту"}/>
				<AppInput 
					placeholder={"Type anything..."}/>
				<AddImageButton />

				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>This is the first page of your app.</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
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
