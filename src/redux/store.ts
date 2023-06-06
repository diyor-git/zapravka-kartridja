import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productReducer";

export const store = configureStore({
  devTools: true,
  reducer: {
    productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
