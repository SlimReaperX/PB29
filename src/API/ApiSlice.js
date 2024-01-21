import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./Api";
import * as searchActions from "./searchActions"

const PuppyBowlSlice = createSlice({
    name: "PuppyBowl",
    initialState: {
      players: [],
      searchQuery: "",
    },
    reducers: {
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addMatcher(
        puppyBowlApi.endpoints.getAllPlayers.matchFulfilled,
        (state, { payload }) => {
          state.players = payload.results;
        }
      );
    },
  });
  
  export const { setSearchQuery } = PuppyBowlSlice.actions;
  export const selectPlayers = (state) => state.PuppyBowl.players;
  export const selectSearchQuery = (state) => state.PuppyBowl.searchQuery;
  export { searchActions };
  export default PuppyBowlSlice.reducer;