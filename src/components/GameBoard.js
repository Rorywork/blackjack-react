import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

const Gameboard = ({ cards }) => {
  const renderedList = cards.map(card => {
    return <Card key={card.code} card={card} />;
  });

  return <div className="gameboard">{renderedList}</div>;
};

export default Gameboard;
