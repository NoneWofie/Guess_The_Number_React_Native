import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";

import { StatusBar } from "expo-status-bar";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState(false);

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber > 0);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}
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
					{screen}
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
