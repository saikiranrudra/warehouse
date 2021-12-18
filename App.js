import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { Warehouse as WarehouseRoutes } from "./routes/warehouse";

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer initialRouteName="Home">
        <WarehouseRoutes />
      </NavigationContainer>
    </StoreProvider>
  );
}

