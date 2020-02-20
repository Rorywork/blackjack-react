import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cards: [], count: 0, pScore: 0 };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
    );

    this.setState({ cards: response.data.cards });
  };

  renderGameState = count => {
    console.log("renderGameState working");

    if (count === 0) {
      this.setState({ count: 1 });
    }
    if (count === 1) {
      this.setState({ count: 2 });
    }
    if (count === 2) {
      this.setState({ count: 3 });
    }
    if (count === 3) {
      this.setState({ count: 4 });
    }
    if (count === 4) {
      this.setState({ count: 5 });
    }
    if (count === 5) {
      this.setState({ count: 6 });
    }
    if (count === 6) {
      this.setState({ count: 7 });
    }
    if (count === 7) {
      this.setState({ count: 8 });
    } else {
      console.log("There is an error with the count!");
    }
  };

  thePlayerScore = pScore => {
    if (pScore < 21) {
      console.log("You can take another card");
    } else {
      console.log("You have lost");
    }
  };

  render() {
    return (
      <div>
        Found: {this.state.cards.length} cards
        {/* <button onClick={e => this.setState({ count: 4 })}>Next Stage</button> */}
        <h1> Count {this.state.count}</h1>
        <GameBoard
          cards={this.state.cards}
          count={this.state.count}
          pScore={this.state.pScore}
          gameState={this.renderGameState}
          playerScore={this.thePlayerScore}
        />
      </div>
    );
  }
}

export default App;
