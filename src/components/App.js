import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cards: [], count: 0 };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
    );

    this.setState({ cards: response.data.cards });
  };

  renderGameState = count => {
    console.log("renderGameState working");

    if (count === 0) {
      console.log("Count is 0");
    } else {
      console.log("Count is not 0");
    }
  };

  render() {
    return (
      <div>
        Found: {this.state.cards.length} cards
        <button onClick={e => this.setState({ count: 4 })}>Next Stage</button>
        <button>Twist</button>
        <button>Stick</button>
        <GameBoard
          cards={this.state.cards}
          gameState={this.renderGameState}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default App;
