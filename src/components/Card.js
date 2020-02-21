import "./CardStyles.css";
import React from "react";

const Card = ({ card, paint }) => {
  // console.log(card);

  return (
    <div>
      <img className="card" alt={card.id} src={card.image} />
      <p className="white">{card.value}</p>
      <p>{paint(card.value)}</p>
    </div>
  );
};

export default Card;
