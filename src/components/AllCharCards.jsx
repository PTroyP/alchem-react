import { Component } from 'react';
import { CharacterCard } from './Fm-cards';

export class AllCharCards extends Component {
  render() {
    const { allChar } = this.props;
    return (
      <div className="card-container">
        {allChar.map((charCard) => {
          return <CharacterCard key={charCard.name} charCard={charCard} />;
        })}
      </div>
    );
  }
}
