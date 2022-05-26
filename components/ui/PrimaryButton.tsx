import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

type Props = {
	children: React.ReactNode;
	onPress: () => void;
};

const PrimaryButton: React.FC<Props> = props => {
	const pressHandler = () => {
		props.onPress();
	};

	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={styles.buttonInnerContainer}
				onPress={pressHandler}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.buttonText}>{props.children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		borderRadius: 28,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
