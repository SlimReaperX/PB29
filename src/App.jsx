import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayer from "./components/NewPlayerForm";
import Navbar from "./components/NavBar";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path={"/players/:id"} element={<SinglePlayer />} />
          <Route path="/players/" element={<NewPlayer />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
