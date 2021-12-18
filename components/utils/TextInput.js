import { TextInput } from "react-native";
const Input = (props) => {
  return (
    <TextInput {...props} style={{ fontSize: 17, paddingVertical: 5, ...props.style }} />
  );
};

export default Input;
