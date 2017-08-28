import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        '','','','','','','','',''
      ]
    }
  }

handleClick(index) {
  if(this.state.board[index] === '') {
    this.state.board[index] = this.state.currentTurn
    this.setState({
      board: this.state.board,
      currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
    })
  }
  console.log('this.state.board: ' + this.state.board);
  this.checkForWinner();
}

checkForWinner() {
  let me = this
  let wins = [[0,1,2],[3,4,5]]
  let state = me.state.board

  return wins.find(function(combo) {
    if(state[combo[0]] === state[combo[1]] && state[combo[0]] === state[combo[2]] && state[combo[0]]) {
      alert('Yes')
    }
  })

}

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={this.handleClick.bind(this, index)} data-cell-id={index} className="square">{cell}</div>;
        })}
      </div>
    );
  }
}

export default App;
