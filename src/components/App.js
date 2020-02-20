import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cards: [], playerCount: 0, dealerCount: 0 };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
    );

    this.setState({ cards: response.data.cards });
  };

  renderGameState = (playerCount, dealerCount) => {
    console.log("renderGameState working");

    if (playerCount === 0) {
      this.setState({ playerCount: 1, dealerCount: 1 });
    }
    if (playerCount === 1) {
      this.setState({ playerCount: 2 });
    }
    if (playerCount === 2) {
      this.setState({ playerCount: 3 });
    }
    if (playerCount === 3) {
      this.setState({ dealerCount: 2 });
    }
    if (playerCount === 3 && dealerCount === 2) {
      this.setState({ dealerCount: 3 });
    }
    if (playerCount === 3 && dealerCount === 3) {
      this.setState({ dealerCount: 4 });
    }
    if (playerCount === 3 && dealerCount === 4) {
      this.setState({ dealerCount: 5 });
    } else {
      console.log("There is an error with the count!");
    }
  };

  render() {
    return (
      <div>
        Found: {this.state.cards.length} cards
        <button onClick={e => this.setState({ playerCount: 4 })}>
          Next Stage
        </button>
        <h1> Count {this.state.playerCount}</h1>
        <button>Twist</button>
        <button>Stick</button>
        <GameBoard
          cards={this.state.cards}
          gameState={this.renderGameState}
          playerCount={this.state.playerCount}
          dealerCount={this.state.dealerCount}
        />
      </div>
    );
  }
}

export default App;
