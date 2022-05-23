import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
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
		backgroundColor: "#72063c",
		//Andriod only
		elevation: 20,
		// ISO only
		// shadowColor: "black",
		// shadowOffset: { width: 0, height: 2 },
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
});
