import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

interface Props {
	children: React.ReactNode;
}

const NumberContainer: React.FC<Props> = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

//screen entire screen
// window excluding status bar
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: Colors.accent500,
		padding: deviceWidth < 380 ? 12 : 24,
		margin: deviceWidth < 380 ? 12 : 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: Colors.accent500,
		fontSize: deviceWidth < 380 ? 28 : 36,
		// fontWeight: "bold",
		fontFamily: "open-sans-bold",
	},
});
