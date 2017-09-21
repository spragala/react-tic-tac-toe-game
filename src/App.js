import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';
import './styles/App.css';
import './styles/Navbar.css';

class App extends Component {


  render() {
    return (
      <div className="container">
        <Navbar />
        <Board />
      </div>
    );
  }
}

export default App;
