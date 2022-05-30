import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface Props {
	children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 24,
		// fontWeight: "bold",
		color: "white",
		textAlign: "center",
		borderWidth: 2,
		borderColor: "white",
		padding: 12,
		maxWidth: "80%",
		// minWidth: "80%",
		width: 300,
	},
});
