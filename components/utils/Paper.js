import { StyleSheet, View } from "react-native";

const Paper = ({ children, style }) => {
  return <View style={[styles.paper, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  paper: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderBottomColor: "#eee",
    borderBottomWidth: 5
  },
});

export default Paper;
