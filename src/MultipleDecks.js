import React, { Component } from 'react';
import SkateDeck from './SkateDeck';
import './MultipleDecks.css';

class MultipleDecks extends Component {
  static defaultProps = {
    skateDecks : [
      { id: 1, name: 'Pro Deck', size: 8.0, cost: 59.99 },
      { id: 2, name: 'Pro Deck', size: 8.0, cost: 59.99 },
      { id: 3, name: 'Pro Deck', size: 8.0, cost: 59.99 },
      { id: 4, name: 'Logo Deck', size: 8.25, cost: 59.99 },
      { id: 5, name: 'Logo Deck', size: 8.25, cost: 59.99 },
      { id: 6, name: 'Logo Deck', size: 8.25, cost: 59.99 },
      { id: 7, name: 'Am Deck', size: 7.8, cost: 59.99 },
      { id: 8, name: 'Am Deck', size: 7.8, cost: 59.99 },
      { id: 9, name: 'Am Deck', size: 7.8, cost: 59.99 },
    ]
  };
  render() {
    return (
     
      <div className="MultipleDecks">
        <h1 className="MultipleDecks-title">SkateDecks!!!</h1>
        <div className='MultipleDecks-cards'>
          {this.props.skateDecks.map((s) => (
            <SkateDeck id={s.id} name={s.name} size={s.size} cost={s.cost} />
          ))}
        </div>
      </div>
    )
  }
}

export default MultipleDecks;



