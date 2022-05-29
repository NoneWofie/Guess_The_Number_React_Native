import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

interface Props {
	children: React.ReactNode;
}

const InstructionText: React.FC<Props> = ({ children }) => {
	return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
	instructionText: {
		color: Colors.accent500,
		fontSize: 24,
	},
});

export default InstructionText;
