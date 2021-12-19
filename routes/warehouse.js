import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AboutWarehouse from "../screens/AboutWarehouse";

const Stack = createNativeStackNavigator();

export const Warehouse = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "Warehouses" }} />
      <Stack.Screen name="AboutWarehouse" component={AboutWarehouse} options={{ title: "About Warehouse" }} />
    </Stack.Navigator>
  );
};
