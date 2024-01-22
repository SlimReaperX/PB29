import { useGetAllPlayersQuery } from "../API/Api";
import React, { useState, useEffect } from "react";
import { createAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AllPlayers() {
  const navigate = useNavigate();
  const { data = {}, error, isLoading } = useGetAllPlayersQuery();
  const [playersData, setPlayersData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    if (data?.data?.players) {
      // Filter players based on the search query
      const filteredPlayers = data.data.players.filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPlayersData(filteredPlayers);
    }
  }, [data, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Can't Fetch Players - {error.message}</div>;
  }

  return (
    <div className="players">
      <input
        type="text"
        placeholder="Search by player name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {playersData.map((player) => (
        <div key={player.id} className="player-card">
          <img
            onClick={() => navigate(`/players/${player.id}`)}
            src={player.imageUrl}
            alt={player.name}
            className="player-image"
          />
          <div className="player-details">
            <h2> {player.name} </h2>
            <p> {player.breed} </p>
            <p> {player.teamId} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AllPlayers;
export const setSearchQuery = createAction("search/setQuery");
export const clearSearchQuery = createAction("search/clearQuery");
