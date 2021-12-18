import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./features/warehouse/warehouseSlice";

export default configureStore({
    reducer: {
        warehouses: warehouseReducer
    }
});