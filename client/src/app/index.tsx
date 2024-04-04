import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "../store/store";

import AppAuthorization from "../modules/AppAuthorization/AppAuthorization";

export default function Page() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<SafeAreaView>
					<View>				
						<AppAuthorization />
					</View>
				</SafeAreaView>
			</Provider>
		</SafeAreaProvider>
	);
}

