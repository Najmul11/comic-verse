import { createSlice } from "@reduxjs/toolkit";

type IState = {
  user: {
    _id: string;
    email: string;
  } | null;
};

const initialState: IState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
