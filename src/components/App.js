import React from "react";
import Axios from "axios";
import GameBoard from "./GameBoard";

class App extends React.Component {
  state = { cardsPlayer: [], cardsDealer: [], countPlayer: 0, countDealer: 0 };

  drawCards() {
    const Url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";

    Axios.get(Url)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <button onClick={this.drawCards}>Draw Cards</button>
        <GameBoard />
      </div>
    );
  }
}

export default App;
