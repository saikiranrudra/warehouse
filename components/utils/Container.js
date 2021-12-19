import { ScrollView, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default Container;
