import React, { Component } from 'react';

const matchStyle = {
  border: '5px solid black'
  };

export default class Match extends Component {
  state = {
    bitten: null
  }

  renderCard(){

    const caps = {
      textTransform: 'capitalize'
    }

    return (
      <div style={matchStyle}>
        <h1 style={caps}>{this.props.displayName}</h1>
        <img src={this.props.profilePicture} alt={`${this.props.displayName} profile`} />
        <p style={caps}><strong>Classification:</strong> {this.props.classification}</p>
        <span>
          <img height='50px' alt='heart' src="https://emojis.wiki/emoji-pics/facebook/heart-with-arrow-facebook.png" onClick={() => this.props.handleClickInitialBite()} />
          <img height='50px' alt='garlic' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/181/garlic_1f9c4.png" onClick={() => this.props.handleClickGarlic()} />
        </span>
      </div>
    )
  }

  render(){
    // Capitalization
    if (this.state.bitten) { return null } else {
      return this.renderCard()
  }
}
}
