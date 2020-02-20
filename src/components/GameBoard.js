import "./Gameboard.css";
import React from "react";
import Card from "./Card.js";

class Gameboard extends React.Component {
  renderedList = this.props.cards.map(card => {
    return <Card key={this.props.card.code} card={card} />;
  });

  // if (count === 0) {
  //   let a = 2;
  // }
  // else if (count === 1) {
  //   let a = 2;
  //   let b = 3;
  // } else if (count === 2) {
  //   let a = 3;
  //   let b = 4;
  // } else if (count === 3) {
  //   let a = 4;
  //   let b = 5;
  // } else if (count === 4) {
  //   let a = 5;
  //   let b = 7;
  // } else if (count === 5) {
  //   let a = 6;
  //   let b = 7;
  // } else if (count === 6) {
  //   let a = 7;
  //   let b = 8;
  // } else if (count === 7) {
  //   let a = 8;
  //   let b = 9;
  // } else {
  //   let a = 9;
  //   let b = 10;
  // }

  render() {
    return (
      <div>
        <div className="gameboard">{this.renderedList.slice(1, 4)}</div>
        <button onClick={() => this.props.gameState(this.props.count)}>
          Test RenderState
        </button>
      </div>
    );
  }
}

export default Gameboard;

// <div>
//   <div className="gameboard">{renderedList.slice(1, 3)}</div>
//   <button onClick={() => gameState(count)}>Test RenderState</button>
// </div>
