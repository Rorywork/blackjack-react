import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cardsPlayer: [], cardsDealer: [], countPlayer: 0, countDealer: 0 };

  getCards() {
    const Url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";

    Axios.get(Url)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>This is my Blackjack App</h1>
        <button onClick={this.getCards}>API Request</button>
        <GameBoard />
      </div>
    );
  }
}

export default App;
