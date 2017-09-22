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

  }

  resetGame(e) {
    e.preventDefault();

    window.location.reload();
    console.log('hello')
  }

  render() {
    return (
      <div className="page-wrapper">
        <Navbar onReset={ this.resetGame }/>
        <Board />
      </div>
    );
  }
}

export default App;
