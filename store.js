import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./features/warehouse/warehouseSlice";
import warehouseFilterReducer from "./features/warehouseFilters/filtersSlice";

export default configureStore({
    reducer: {
        warehouses: warehouseReducer,
        filters: warehouseFilterReducer
    }
});