import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import accessTokenSlice from "./slices/accessTokenSlice";
import userSlice from "./slices/userSlice";
import darkModeSlice from "./slices/darkModeSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice,
    darkMode: darkModeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
