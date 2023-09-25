import { Component } from 'react';

export class CharacterCard extends Component {
  render() {
    const { charCard } = this.props;
    const { name, nickName, imageUrl, background } = charCard;
    return (
      <div className="charCard">
        <div className="name-block">
          <h3 className="title">{name}</h3>
          <h4 className="nk-name">{nickName}</h4>
        </div>
        <div className="char-img">
          <img src={imageUrl} />
        </div>
        <p className="bkgrnd">{background}</p>
      </div>
    );
  }
}
