import "./CardStyles.css";
import React from "react";

class Card extends React.Component {
  state = { value: this.props.card.value, playerScore: 0 };

  componentDidMount = () => {
    // console.log(this.props.card.value);
    // console.log("paintByNumbers function working");
    // console.log(this.state.value);

    if (this.state.value === "ACE") {
      console.log("Ace - The value of this is either 11 or 1");
      this.addToPlayerScore(11);
    } else if (this.state.value < 10) {
      console.log(" 2-10 The value of this is its own value");
      this.addToPlayerScore(Number(this.state.value));
    } else {
      console.log("10-K - The value of this is 10");
      this.addToPlayerScore(10);
    }
    return;
  };

  addToPlayerScore = cardExValue => {
    this.setState({ playerScore: 8 });
    console.log(this.state.playerScore);
  };

  // paintByNumbers = value => {
  //   console.log("paintByNumbers function working");

  //   if (value === "ACE") {
  //     console.log("Ace - The value of this is either 11 or 1");
  //     this.props.addPScore(11);
  //   } else if (value < 10) {
  //     console.log(" 2-10 The value of this is its own value");
  //     this.props.addPScore(Number(value));
  //   } else {
  //     console.log("10-K - The value of this is 10");
  //     this.props.addPScore(10);
  //   }
  //   return;
  // };

  render() {
    return (
      <div>
        <img
          className="card"
          alt={this.props.card.id}
          src={this.props.card.image}
        />
        <p className="white">{this.props.card.value}</p>
        <p className="yellow">{this.state.value}</p>
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
