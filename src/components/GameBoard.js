import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

const Gameboard = ({ cards, count, gameState, pScore, paint }) => {
  const renderedList = cards.map(card => {
    return <Card key={card.code} card={card} paint={paint} />;
  });

  if (count === 0) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 2)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count, pScore)}>Twist</button>
        <button onClick={() => paint()}>Paint</button>
        {/* <button onClick={() => playerScore(pScore)}>Score</button> */}
      </div>
    );
  } else if (count === 1) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 3)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count, pScore)}>Twist</button>
      </div>
    );
  } else if (count === 2) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 4)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count, pScore)}>Twist</button>
      </div>
    );
  } else if (count === 3) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 7)}</div>
        <button onClick={() => gameState(count)}>Stick</button>
      </div>
    );
  } else if (count === 4) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 8)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  } else if (count === 5) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 9)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  } else if (count === 6) {
    return (
      <div className="gameboard">
        <div className="card-list player">{renderedList.slice(0, 5)}</div>
        <div className="card-list dealer">{renderedList.slice(5, 10)}</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  } else if (count === 7) {
    return (
      <div className="gameboard">
        <div>GAME OVER</div>
        <button onClick={() => gameState(count)}>Test RenderState</button>
      </div>
    );
  }
};

export default Gameboard;
