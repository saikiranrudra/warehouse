import Title from "../utils/Title"; 
import Paragraph from "../utils/Paragraph";
import Paper from "../utils/Paper";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({ title, description, icon="warehouse", onPress }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <Paper style={styles.container}>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name={icon} size={32} color="#30475E" />
                </View>
                <View>
                    <Title>{title}</Title>
                    <Paragraph>{description}</Paragraph>
                </View>
            </Paper>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    }
})

export default ListItem;