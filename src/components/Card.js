import "./CardStyles.css";
import React from "react";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div className="player-cards">
      <img className="card" alt={card.id} src={card.image} />
    </div>
  );
};

export default Card;
