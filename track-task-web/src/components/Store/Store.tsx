import { configureStore } from "@reduxjs/toolkit";
import SigninSlice from "./SigninSlice";

const store = configureStore({
  reducer: {
    SigninSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
