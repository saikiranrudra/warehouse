import { useState } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/List/ListItem";
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
      <SearchInput
        text={searchInput}
        setText={setSearchInput}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />
      <FlatList
        data={warehouses.filter(warehousesFilter)}
        renderItem={({ item }) => (
          <ListItem title={item.name} description={item.type} />
        )}
      />
    </View>
  );
};

export default Home;
