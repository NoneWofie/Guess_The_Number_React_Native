import { View, Text } from "react-native";

type Props = {
	children: React.ReactNode;
};

const PrimaryButton: React.FC<Props> = props => {
	return (
		<View>
			<Text>{props.children}</Text>
		</View>
	);
};

export default PrimaryButton;
