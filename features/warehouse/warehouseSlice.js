import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.json";

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState: initialState,
    reducers: {}
})

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;