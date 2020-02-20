import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cards: [], playerCount: 0 };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
    );

    this.setState({ cards: response.data.cards });
  };

  renderGameState = playerCount => {
    console.log("renderGameState working");

    if (playerCount === 0) {
      this.setState({ playerCount: 1 });
    }
    if (playerCount === 1) {
      this.setState({ playerCount: 2 });
    }
    if (playerCount === 2) {
      this.setState({ playerCount: 3 });
    }
    if (playerCount === 3) {
      this.setState({ playerCount: 4 });
    }
    if (playerCount === 4) {
      this.setState({ playerCount: 5 });
    }
    if (playerCount === 5) {
      this.setState({ playerCount: 6 });
    }
    if (playerCount === 6) {
      this.setState({ playerCount: 7 });
    }
    if (playerCount === 7) {
      this.setState({ playerCount: 8 });
    } else {
      console.log("There is an error with the count!");
    }
  };

  render() {
    return (
      <div>
        Found: {this.state.cards.length} cards
        <button onClick={e => this.setState({ count: 4 })}>Next Stage</button>
        <h1> Phase {this.state.phase}</h1>
        <h1> Count {this.state.count}</h1>
        <button>Twist</button>
        <button>Stick</button>
        <GameBoard
          cards={this.state.cards}
          gameState={this.renderGameState}
          count={this.state.count}
          phase={this.state.phase}
        />
      </div>
    );
  }
}

export default App;
