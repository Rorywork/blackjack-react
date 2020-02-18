import "./GameBoard.css";
import React from "react";
import CardListPlayer from "./CardListPlayer";
import CardListDealer from "./CardListDealer";

const GameBoard = () => {
  return (
    <div class="gameboard">
      <CardListDealer />
      <CardListPlayer />
    </div>
  );
};

export default GameBoard;
