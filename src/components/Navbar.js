import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Tic Tac Toe</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="waves-effect waves-light btn reset-button"
                onClick={ this.props.resetGame }>
                <i className="material-icons left">refresh</i> New Game
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
