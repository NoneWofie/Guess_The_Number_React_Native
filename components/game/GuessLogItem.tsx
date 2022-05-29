import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface Props {
	roundNumber: number;
	guess: number;
}

const GuessLogItem: React.FC<Props> = ({ roundNumber, guess }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Openent's Guess: {guess}</Text>
		</View>
	);
};

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderRadius: 40,
		borderWidth: 1,
		padding: 12,
		marginVertical: 8,
		backgroundColor: Colors.accent500,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		elevation: 4,
	},
	itemText: {
		fontFamily: "open-sans",
	},
});
