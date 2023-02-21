import { configureStore } from "@reduxjs/toolkit";
import countWorkSlice from "./countWorkSlice";
import otkSlice from "./otkSlice";
import storeSlice from "./storeSlice";
export default configureStore({
  reducer: {
    countWork: countWorkSlice,
    otk: otkSlice,
    store: storeSlice,
  },
});
