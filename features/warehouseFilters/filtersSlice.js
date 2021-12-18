import { createSlice } from "@reduxjs/toolkit";

export const warehouseFilterSlice = createSlice({
  name: "warehouseFilter",
  initialState: {
    city: "",
    cluster: "",
    spaceLimit: { min: 0, max: 0 },
  },

  reducers: {
    setCity(state, newCity) {
      state.city = newCity;
    },

    setCluster(state, newCluster) {
      state.cluster = newCluster;
    },

    setSpaceLimit(state, newSpaceLimit) {
      state.spaceLimit = newSpaceLimit;
    },
  },
});

export const { setCity, setCluster, setSpaceLimit } =
  warehouseFilterSlice.actions;

export default warehouseFilterSlice.reducer;