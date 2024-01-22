import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./Api";


const PuppyBowlSlice = createSlice({
    name: "PuppyBowl",
    initialState: {
      players: [],
      searchQuery: "",
    },
    reducers: {
      setPlayer: (state, action) => {
        state.players = action.payload;
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
  export default PuppyBowlSlice.reducer;