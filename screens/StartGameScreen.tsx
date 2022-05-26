import { TextInput, View, StyleSheet, Alert } from "react-native";

import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

interface Props {
	onPickNumber: (chosenNumber: number) => void;
}

const StartGameScreen: React.FC<Props> = props => {
	const [enteredNumber, setEnteredNumber] = useState("");

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

	return (
		<View style={styles.inputContainer}>
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
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		// flex: 1,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		backgroundColor: Colors.primary800,
		//Andriod only
		elevation: 20,
		// ISO only
		// shadowColor: "black",
		// shadowOffset: { width: 0, height: 2 },
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
