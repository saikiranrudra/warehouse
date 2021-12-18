import Title from "../utils/Title"; 
import Paragraph from "../utils/Paragraph";
import Paper from "../utils/Paper";

const ListItem = ({ title, description, icon }) => {
    return (
        <Paper>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
        </Paper>
    )
}

export default ListItem;