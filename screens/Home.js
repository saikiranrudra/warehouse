import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";


const Home = () => {
  const warehouses = useSelector(state => state.warehouses);

  return (
    <View>
      <FlatList
        data={warehouses}
        renderItem={({item}) => (<Text>{item.name}</Text>)}
      />
    </View>
  );
};

export default Home;
