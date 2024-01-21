import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../api/puppyBowlSlice";
import { createAction } from "@reduxjs/toolkit"; 

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchActions.searchPlayers(searchQuery));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
export const searchPlayers = createAction("PuppyBowl/searchPlayers");