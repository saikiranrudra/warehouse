import { createSlice } from "@reduxjs/toolkit";

export const warehouseFilterSlice = createSlice({
  name: "warehouseFilter",
  initialState: {
    city: "",
    cluster: "",
    spaceLimit: { min: null, max: null },
  },

  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },

    setCluster(state, action) {
      state.cluster = action.payload;
    },

    setSpaceLimit(state, action) {
      state.spaceLimit = action.payload;
    },
  },
});

export const { setCity, setCluster, setSpaceLimit } =
  warehouseFilterSlice.actions;

export default warehouseFilterSlice.reducer;