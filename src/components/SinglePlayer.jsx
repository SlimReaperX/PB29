import { useGetSinglePlayerQuery, useDeletePlayerMutation } from "../API/Api";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SinglePlayer = () => {
  const params = useParams();
  const navigate = useNavigate;
  const [player, setplayer] = useState([]);
  const { data, isLoading, isError } = useGetSinglePlayerQuery(params.id);
  const [deletePlayer] = useDeletePlayerMutation();

  useEffect(() => {
    if (data) {
      setplayer(data);
    }
  }, [data]);

  const handleDelete = async () => {
    try {
      await deletePlayer(data.data.player.id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <div className="player-details">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error loading player details</h1>
      ) : (
        <div className="player-card">
          <img
            src={data.data.player.imageUrl}
            alt={data.data.player.name}
            className="player-image"
          />
          <div className="player-details">
            <h2>{data.data.player.name}</h2>
            <p>Breed: {data.data.player.breed}</p>
            <p>Status: {data.data.player.status}</p>
          </div>
          <button onClick={handleDelete}>Delete Player</button>
        </div>
      )}
    </div>
  );
};

export default SinglePlayer;
