import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

const Gameboard = ({ cards, count, gameState, playerScore, pScore }) => {
  const renderedList = cards.map(card => {
    return <Card key={card.code} card={card} />;
  });

  if (count === 0) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 2)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={(() => gameState(count), () => playerScore(pScore))}>
          Twist
        </button>
      </div>
    );
  }
  if (count === 1) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 3)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count)}>Twist</button>
      </div>
    );
  }
  if (count === 2) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 4)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count)}>Twist</button>
      </div>
    );
  }
  if (count === 3) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count)}>Stick</button>
      </div>
    );
  }
  if (count === 4) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 8)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 5) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 9)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 6) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 10)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
  if (count === 7) {
    return (
      <div className="gameboard">
        <div>GAME OVER</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
};

export default Gameboard;
