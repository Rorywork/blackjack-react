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
        <div className="gameboard">{renderedList.slice(1, 3)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="gameboard">{renderedList}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
};

export default Gameboard;
