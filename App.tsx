import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameIsOver from "./screens/GameOverScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState(0);
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [forsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!forsLoaded) {
		return <AppLoading />;
	}

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(numberOfRounds: number) {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds);
	}

	function startNewGameHandler() {
		setUserNumber(0);
		setGameIsOver(true);
		setGuessRounds(0);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} OnGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameIsOver
				userNumber={userNumber}
				roundsNumber={guessRounds}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<>
			<StatusBar style="light" />
			<LinearGradient
				style={styles.rootScreen}
				colors={[Colors.primary700, Colors.accent500]}
			>
				<ImageBackground
					style={styles.rootScreen}
					source={require("./assets/images/background.png")}
					resizeMode="cover"
					imageStyle={styles.backgroundImage}
				>
					<SafeAreaView style={styles.rootScreen}>
						{screen}
					</SafeAreaView>
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
