import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

const Gameboard = ({ cards, count, gameState }) => {
  const renderedList = cards.map(card => {
    return (
      <div>
        <div>
          <Card key={card.code} card={card} />
        </div>
        <div>
          <p>Hello</p>
          <button onClick={() => gameState(count)}>
            Test Callback function
          </button>
        </div>
      </div>
    );
  });

  return <div className="gameboard">{renderedList}</div>;
};

export default Gameboard;
