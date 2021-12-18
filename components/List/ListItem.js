import Title from "../utils/Title"; 
import Paragraph from "../utils/Paragraph";
import Paper from "../utils/Paper";
import { TouchableHighlight } from "react-native";

const ListItem = ({ title, description, icon }) => {
    return (
        <TouchableHighlight onPress={() => console.log(title)}>
            <Paper>
                <Title>{title}</Title>
                <Paragraph>{description}</Paragraph>
            </Paper>
        </TouchableHighlight>
    )
}

export default ListItem;