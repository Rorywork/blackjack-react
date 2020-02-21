import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cards: [], count: 0, pScore: 0, cardValue: null };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
    );
    console.log(response);
    this.setState({ cards: response.data.cards });
    // this.setState({ cardValue: this.state.cards[0].value });
    // this.setState({
    //   pScore: this.state.cards[0].value + this.state.cards[1].value
    // });
  };

  renderGameState = count => {
    console.log("renderGameState working");

    if (count === 0) {
      this.setState({ count: 1 });
    } else if (count === 1) {
      this.setState({ count: 2 });
    } else if (count === 2) {
      this.setState({ count: 3 });
    } else if (count === 3) {
      this.setState({ count: 4 });
    } else if (count === 4) {
      this.setState({ count: 5 });
    } else if (count === 5) {
      this.setState({ count: 6 });
    } else if (count === 6) {
      this.setState({ count: 7 });
    } else if (count === 7) {
      this.setState({ count: 8 });
    } else {
      console.log("There is an error with the count!");
    }
  };

  paintByNumbers = value => {
    console.log("paintByNumbers function working");

    if (value === "ACE") {
      console.log("Ace - The value of this is either 11 or 1");
      this.addToPlayerScore(11);
    } else if (value < 10) {
      console.log(" 2-10 The value of this is its own value");
      this.addToPlayerScore(Number(value));
    } else {
      console.log("10-K - The value of this is 10");
      this.addToPlayerScore(10);
    }
  };

  // addToPlayerScoreArray(cardExValue) {
  //   console.log(cardExValue);

  // }

  addToPlayerScore(cardExValue) {
    // this.setState({ pScore: cardExValue });
    console.log(this.state.pScore);
    this.setState({ pScore: cardExValue });
  }

  render() {
    return (
      <div>
        Found: {this.state.cards.length} cards
        <h1> Count {this.state.count}</h1>
        <GameBoard
          cards={this.state.cards}
          count={this.state.count}
          pScore={this.state.pScore}
          cardValue={this.state.cardValue}
          setCardValue={this.setCardValue}
          paint={this.paintByNumbers}
          gameState={this.renderGameState}
        />
        <h1>Player Score: {this.state.pScore}</h1>
        <h1>Dealer score: </h1>
        <h1>Card Value: {this.state.cardValue} </h1>
      </div>
    );
  }
}

export default App;
