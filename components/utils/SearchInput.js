import { TextInput, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Paper from "./Paper";

const SearchInput = ({
  placeholder = "Enter Warehouse Name",
  text,
  setText,
  setShowFilter,
  showFilter,
}) => {
  return (
    <Paper style={styles.searchInput}>
      <MaterialCommunityIcons name="magnify" size={25} color="#30475E" />
      <TextInput
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
        style={styles.input}
      />
      <TouchableHighlight onPress={() => setShowFilter(!showFilter)}>
        <MaterialCommunityIcons name="filter" size={25} color="#30475E" />
      </TouchableHighlight>
    </Paper>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    paddingLeft: 8,
    width: "85%",
  },
});

export default SearchInput;
