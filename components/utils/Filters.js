import { Button, SafeAreaView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Title from "./Title";
import TextInput from "./TextInput";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";

const Filters = ({ setShowFilter }) => {
  const warehouses = useSelector((state) => state.warehouses);
  const { city, cluster, spaceLimit } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>City</Title>
      <Picker
        selectedValue={city}
        onValueChange={(item) =>
          dispatch({ type: "warehouseFilter/setCity", payload: item })
        }
      >
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
        onValueChange={(item) =>
          dispatch({ type: "warehouseFilter/setCluster", payload: item })
        }
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
        label="Min Limit"
        onChangeText={(newValue) =>
          dispatch({
            type: "warehouseFilter/setSpaceLimit",
            payload: { ...spaceLimit, min: newValue },
          })
        }
      />
      <TextInput
        placeholder="Max"
        keyboardType="numeric"
        value={spaceLimit.max}
        label="Max Limit"
        onChangeText={(newValue) =>
          dispatch({
            type: "warehouseFilter/setSpaceLimit",
            payload: { ...spaceLimit, max: newValue },
          })
        }
      />

      <Button title="Close" onPress={() => setShowFilter(false)} />
    </Container>
  );
};

const styles = StyleSheet.create({
});

export default Filters;
