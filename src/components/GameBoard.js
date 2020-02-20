import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

const Gameboard = ({ cards, playerCount, gameState }) => {
  const renderedList = cards.map(card => {
    return <Card key={card.code} card={card} />;
  });

  if (playerCount === 0) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 2)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 1) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 3)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 2) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 4)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 3) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 4) {
    return (
      <div className="gameboard">
        <div className="card-list dealer">{renderedList.slice(0, 7)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 5) {
    return (
      <div className="gameboard">
        <div className="card-list dealer">{renderedList.slice(0, 8)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 6) {
    return (
      <div className="gameboard">
        <div className="card-list dealer">{renderedList.slice(0, 9)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
  if (playerCount === 7) {
    return (
      <div className="gameboard">
        <div className="card-list dealer">{renderedList.slice(0, 10)}</div>
        <button onClick={() => gameState(playerCount)}>Test RenderState</button>
      </div>
    );
  }
};

export default Gameboard;
