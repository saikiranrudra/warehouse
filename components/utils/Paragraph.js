import { Text } from "react-native";

const Paragraph = ({ children, style }) => {
    return (
        <Text style={style}>
            {children}
        </Text>
    );
}

export default Paragraph;