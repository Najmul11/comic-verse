import { createSlice } from "@reduxjs/toolkit";

type IState = {
  darkMode: boolean;
};

const initialState: IState = {
  darkMode: localStorage.getItem("darkMode") === "true",
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDark: (state) => {
      state.darkMode = true;
      localStorage.setItem("darkMode", "true");
    },
    setLight: (state) => {
      state.darkMode = false;
      localStorage.setItem("darkMode", "false");
    },
  },
});

export const { setDark, setLight } = darkModeSlice.actions;

export default darkModeSlice.reducer;
