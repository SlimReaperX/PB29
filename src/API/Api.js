import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-FT-SF",
  }), 
  endpoints: (builder) => ({
    getAllPlayers: builder.query({ query: () => "/players" }),
    getSinglePlayer: builder.query({ query: (id) => "/players/" + id }),
  AddPlayer: builder.mutation({
    query: (newPlayer) => ({
      url: "/players",
      method: "POST",
      body: newPlayer,
    }),
  }),
  deletePlayer: builder.mutation({
    query: (id) => ({
      url: "/players/" + id,
      method: "DELETE",
    }),
  }),
  })
})


export const {
  useGetAllPlayersQuery,
  useGetSinglePlayerQuery,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = puppyBowlApi;
 

