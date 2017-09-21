import React, { Component } from 'react';
import Board from './components/Board';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: false
    }
  }

  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}

export default App;
