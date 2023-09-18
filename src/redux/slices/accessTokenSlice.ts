import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type IState = {
  accessToken: string | null;
};

const initialState: IState = {
  accessToken: localStorage.getItem("accessToken") || null,
};

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setAccessToken, clearAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
