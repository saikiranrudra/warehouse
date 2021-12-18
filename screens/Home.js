import { useState } from "react";
import { View, FlatList, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/List/ListItem";
import Filters from "../components/utils/Filters";
import SearchInput from "../components/utils/SearchInput";

const Home = () => {
  const warehouses = useSelector((state) => state.warehouses);
  const [searchInput, setSearchInput] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const warehousesFilter = (warehouse) => {
    if (searchInput === "") {
      return true;
    } else {
      return warehouse.name.includes(searchInput);
    }
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
          <ListItem title={item.name} description={item.type} key={item.id} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
