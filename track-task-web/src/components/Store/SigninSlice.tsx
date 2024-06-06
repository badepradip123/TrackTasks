import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./Store";

const SigninSlice = createSlice({
  name: "SigninSlice",
  initialState: {
    signinStatus: "",
  },
  reducers: {
    login(state, action) {
      state.signinStatus = "signin";
    },
    logout(state, action) {
      state.signinStatus = "";
    },
  },
});

export const { login, logout } = SigninSlice.actions;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default SigninSlice.reducer;
