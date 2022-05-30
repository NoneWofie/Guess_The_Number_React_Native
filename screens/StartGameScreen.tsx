import {
	TextInput,
	View,
	StyleSheet,
	Alert,
	useWindowDimensions,
	Dimensions,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";

import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface Props {
	onPickNumber: (chosenNumber: number) => void;
}

const StartGameScreen: React.FC<Props> = props => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const { width, height } = useWindowDimensions();

	function numberInputHandler(enteredText: string) {
		setEnteredNumber(enteredText);
	}

	function resetTextFieldHander() {
		setEnteredNumber("");
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number",
				"Number has to be a number between 1 and 99",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: () => resetTextFieldHander(),
					},
				]
			);
			return;
		}

		props.onPickNumber(chosenNumber);
	}

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<ScrollView style={{ flex: 1 }}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
				<View
					style={[
						styles.rootContainer,
						{ marginTop: marginTopDistance },
					]}
				>
					<Title>Guess my Number</Title>
					<Card>
						<InstructionText>Enter a Number</InstructionText>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							value={enteredNumber}
							onChangeText={numberInputHandler}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.button}>
								<PrimaryButton onPress={resetTextFieldHander}>
									Reset
								</PrimaryButton>
							</View>
							<View style={styles.button}>
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 380 ? 30 : 100,
		alignItems: "center",
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	button: {
		flex: 1,
		alignItems: "stretch",
	},
});
