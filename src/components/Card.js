import "./CardStyles.css";
import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img
          className="card"
          alt={this.props.card.id}
          src={this.props.card.image}
        />
        <p className="white">{this.props.card.value}</p>
        <p className="yellow">{this.props.paint(this.props.card.value)}</p>
      </div>
    );
  }
}

export default Card;

// const Card = ({ card, paint }) => {
//   return (
//     <div>
//       <img className="card" alt={card.id} src={card.image} />
//       <p className="white">{card.value}</p>
//       <p className="yellow">{paint(card.value)}</p>
//     </div>
//   );
// };

// export default Card;
