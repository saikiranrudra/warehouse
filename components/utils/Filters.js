import { Button, SafeAreaView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useState } from "react";
import TextInput from "./TextInput";

const Filters = ({ setShowFilter }) => {
  const warehouses = useSelector((state) => state.warehouses);
  const [city, setCity] = useState("");
  const [cluster, setCluster] = useState("");
  const [spaceLimit, setSpaceLimit] = useState({
    min: 0,
    max: 0,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Title>City</Title>
      <Picker selectedValue={city} onValueChange={(item) => setCity(item)}>
        <Picker.Item label="All" value="" />
        {[...new Set(warehouses.map((warehouse) => warehouse.city))].map(
          (city) => (
            <Picker.Item label={city} value={city} key={city} />
          )
        )}
      </Picker>

      <Title>Cluster</Title>
      <Picker
        selectedValue={cluster}
        onValueChange={(item) => setCluster(item)}
      >
        <Picker.Item label="All" value="" />
        {[...new Set(warehouses.map((warehouse) => warehouse.cluster))].map(
          (cluster) => (
            <Picker.Item label={cluster} value={cluster} key={cluster} />
          )
        )}
      </Picker>

      <Title>space available limit</Title>
      <TextInput
        placeholder="Min"
        keyboardType="numeric"
        value={spaceLimit.min}
        onValueChange={(newValue) =>
          setSpaceLimit({ ...spaceLimit, min: newValue })
        }
      />
      <TextInput
        placeholder="Max"
        keyboardType="numeric"
        value={spaceLimit.max}
        onValueChange={(newValue) =>
          setSpaceLimit({ ...spaceLimit, max: newValue })
        }
      />

      <Button title="Submit" onPress={() => setShowFilter(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default Filters;
