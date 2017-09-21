import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Navbar extends Component {
  render() {
    return (
      <AppBar
        title="Tic-Tac-Toe"
        className="nav-bar"
      />
    )
  }
}

export default Navbar;
