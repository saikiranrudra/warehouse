import { TextInput, View, StyleSheet } from "react-native";
import Title from "./Title";
const Input = (props) => {
  return (
    <View style={{ paddingVertical: 5 }}>
      <Title>{props.label}</Title>
      <TextInput {...props} style={[props.style, styles.input]} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginTop: 3,
    borderRadius: 4
  },
});

export default Input;
