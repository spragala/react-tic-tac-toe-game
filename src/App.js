import React, { Component } from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: false
    }
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame(e) {
    e.preventDefault();
    this.setState({ test: true })
  }

  render() {
    return (
      <div className="page-wrapper">
        <div>{ this.state.test }</div>
        <Navbar resetGame={ this.resetGame }/>
        <Board shouldRefresh={ this.state.test } /> 
      </div>
    );
  }
}

export default App;
