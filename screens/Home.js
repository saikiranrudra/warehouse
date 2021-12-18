import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/List/ListItem";
import SearchInput from "../components/utils/SearchInput";

const Home = () => {
  const warehouses = useSelector(state => state.warehouses);

  return (
    <View>
      <SearchInput />
      <FlatList
        data={warehouses}
        renderItem={({item}) => <ListItem title={item.name} description={item.type} />}
      />
    </View>
  );
};

export default Home;
