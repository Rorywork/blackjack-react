import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

const Gameboard = ({ cards, count, gameState }) => {
  const renderedList = cards.map(card => {
    return <Card key={card.code} card={card} />;
  });

  if (count === 0) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 2)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 1) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 3)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 2) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 4)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 3) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 5)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 4) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 7)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 5) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 8)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 6) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 9)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 7) {
    return (
      <div>
        <div className="gameboard">{renderedList.slice(0, 10)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
};

export default Gameboard;
