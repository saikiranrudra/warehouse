import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.json";

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: initialState,
  reducers: {
    updateWarehouse(state, action) {
      const index = state.findIndex(
        (warehouse) => warehouse.id === action.payload.id
      );

      if(index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;
