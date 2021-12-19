import Container from "../components/utils/Container";
import TextInput from "./../components/utils/TextInput";
import { Button, StyleSheet, View } from "react-native";

const AboutWarehouse = ({ route }) => {
  const { warehouse } = route.params;
  return (
    <Container>
      {Object.keys(warehouse).map((key) => (
        <TextInput placeholder={key} value={`${warehouse[key]}`} label={key} key={key} />
      ))}
    
      <View style={styles.cta}>
        <Button title="Save Changes" />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
    cta: {
        marginVertical: 15
    }
});

export default AboutWarehouse;
