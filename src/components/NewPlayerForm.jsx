import { useAddPlayerMutation } from "../API/Api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const NewPlayer = () => {
  const Navigate = useNavigate();
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });
  const [createPlayer, { isLoading }] = useAddPlayerMutation();

  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPlayer(playerData);
      console.log("player successfully created!!");
    } catch (error) {
      console.error("Error creating player:", error);
    }
    Navigate("/");
  };

  return (
    <div className="form">
      <h1> New Player Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={playerData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={playerData.breed}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={playerData.status}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={playerData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {" "}
          {isLoading ? "Generating..." : "Create Player"}
        </button>
      </form>
    </div>
  );
};

export default NewPlayer;