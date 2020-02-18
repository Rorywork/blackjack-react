import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cards: [], countPlayer: 0, countDealer: 0 };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=10"
    );

    this.setState({ cards: response.data.cards });
  };

  render() {
    return (
      <div>
        {/* <GameBoard cards={this.state.cards} /> */}
        Found: {this.state.cards.length} cards
        <button>Deal Hand</button>
        <button>Twist</button>
        <button>Stick</button>
        <GameBoard cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
