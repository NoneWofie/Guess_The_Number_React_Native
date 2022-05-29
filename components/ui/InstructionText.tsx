import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

interface Props {
	children: React.ReactNode;
	style?: object;
}

const InstructionText: React.FC<Props> = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: "open-sans",
		color: Colors.accent500,
		fontSize: 24,
	},
});

export default InstructionText;
