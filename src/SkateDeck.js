import React, { Component } from 'react';
import dek from './Deck-Photo-whiteBK.jpg';
import './SkateDeck.css';

class Skatedeck extends Component {
  render() {
    return (
      <div className="Skatedeck">
        <h3 className="Skatedeck-title">{this.props.name}</h3>
        <img className="Skatedeck-img" src={dek} alt={this.props.name} />
        <div className="Skatedeck-data">Size: {this.props.size}</div>
        <div className="Skatedeck-data">Cost: ${this.props.cost}</div>
      </div>
    );
  }
}

export default Skatedeck;