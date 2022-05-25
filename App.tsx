import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { StatusBar } from "expo-status-bar";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<LinearGradient
				style={styles.rootScreen}
				colors={["#4e0329", "#ddb52f"]}
			>
				<ImageBackground
					style={styles.rootScreen}
					source={require("./assets/images/background.png")}
					resizeMode="cover"
					imageStyle={styles.backgroundImage}
				>
					<StartGameScreen />
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
		// backgroundColor: "#ddb52f",
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
