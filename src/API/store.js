import { puppyBowlApi } from "./Api.js";
import ApiSlice from "./ApiSlice.js";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    puppyBowl: ApiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export const { useGetPlayersQuery } = puppyBowlApi;
