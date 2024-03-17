import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomePage from "./pages/HomePage/HomePage"

export default function Page() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View>				
					<HomePage />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

