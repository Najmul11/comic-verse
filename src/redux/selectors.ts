// accessTokenSelectors.ts
import { RootState } from "./store";
export const selectAccessToken = (state: RootState) =>
  state.accessToken.accessToken;
