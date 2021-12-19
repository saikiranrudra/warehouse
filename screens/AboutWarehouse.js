import Container from "../components/utils/Container";
import TextInput from "./../components/utils/TextInput";
import { Button, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getUpdatedObject from "../helpers/getUpdatedObject";
import { ToastAndroid, AlertIOS, Platform } from "react-native";

const AboutWarehouse = ({ route, navigation }) => {
  const [warehouse, setWarehouse] = useState(route.params.warehouse);
  const dispatch = useDispatch();

  const handleSaveChanges = () => {
    dispatch({ type: "warehouse/updateWarehouse", payload: warehouse });
    const msg = "Updated Warehouse Successfully";
    if(Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
        AlertIOS.alert(msg);
    }
    navigation.navigate("Home");
  };

  return (
    <Container>
      {Object.keys(warehouse).map((key) => (
        <TextInput
          placeholder={key}
          value={`${warehouse[key]}`}
          onChangeText={(newValue) => {
            setWarehouse(getUpdatedObject(key, newValue, warehouse));
          }}
          label={key}
          key={key}
        />
      ))}

      <View style={styles.cta}>
        <Button title="Save Changes" onPress={handleSaveChanges} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  cta: {
    marginVertical: 15,
  },
});

export default AboutWarehouse;
