import "./CardStyles.css";
import React from "react";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div class="player-cards">
      <img class="card" src={card.image} />
    </div>
  );
};

export default Card;
