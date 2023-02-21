import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    selectedData: {},
  },
  reducers: {
    useStoreSelect(state, action) {
      state.selectedData = action.payload;
    },
    setStoreSelectedData(state, action) {
      state.selectedData = action.payload;
    },
  },
});
export default storeSlice.reducer;
export const { useStoreSelect, setStoreSelectedData } = storeSlice.actions;
