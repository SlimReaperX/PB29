import { useGetAllPlayersQuery } from "../API/Api";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"
import "../App.css"

function AllPlayers() {
    const { data = {}, error, isLoading } = useGetAllPlayersQuery
    const [playersData, setPlayersData] = useState([])

    useEffect(()=> {
        if (data?.data?.players) {
            setPlayersData(data.data.players);
        }
    }, [data])

    if (isLoading) {
        return <div> loading...</div>
    }
    if (error) {
        return <div> Can't Fetch Players: {error.message}</div>
    }


  return (
    <div className="players">
      {isLoading ? (
        <h1> One minute...</h1>
      ) : (
        playersData.map((player) => (
            <Link>
          <div key={player.id} className="player-card">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="player-image"
            />
            <div className="player-details">
              <h2> {player.name} </h2>
              <button
                onClick={() => Navigate(`/players/${player.id}`)}
              ></button>
              <p> {player.breed} </p>
              <p> {player.status} </p>
            </div>
          </div>
          </Link>
        ))
      )}
    </div>
  );
}
export default AllPlayers;


