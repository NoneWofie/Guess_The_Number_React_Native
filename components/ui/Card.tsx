import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

interface Props {
	children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
	return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	inputContainer: {
		// flex: 1,
		marginTop: 36,
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
});
