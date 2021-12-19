import { useState } from "react";
import { View, FlatList, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/List/ListItem";
import Filters from "../components/utils/Filters";
import SearchInput from "../components/utils/SearchInput";

const Home = ({ navigation }) => {
  const warehouses = useSelector((state) => state.warehouses);
  const { city, cluster, spaceLimit } = useSelector((state) => state.filters);
  const [searchInput, setSearchInput] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const warehousesFilter = (warehouse) => {
    let validCity = city === "" || city === warehouse.city;

    let validCluster = cluster === "" || cluster === warehouse.cluster;

    let validSpaceLimit =
      isNaN(parseInt(spaceLimit.min)) ||
      isNaN(parseInt(spaceLimit.max)) ||
      (warehouse.space_available >= parseInt(spaceLimit.min) &&
        warehouse.space_available >= parseInt(spaceLimit.max));

    let validName =
      warehouse.name === "" || warehouse.name.includes(searchInput);

    return validName && validCity && validCluster && validSpaceLimit;
  };

  const handleOnClickWarehouse = (warehouse) => {
    navigation.navigate("AboutWarehouse", { warehouse });
  };

  return (
    <View>
      <Modal visible={showFilter}>
        <View style={styles.modalContent}>
          <Filters setShowFilter={setShowFilter} />
        </View>
      </Modal>

      <SearchInput
        text={searchInput}
        setText={setSearchInput}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />
      <FlatList
        data={warehouses.filter(warehousesFilter)}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPress={() => {
              handleOnClickWarehouse(item);
            }}
            description={item.type}
            key={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
