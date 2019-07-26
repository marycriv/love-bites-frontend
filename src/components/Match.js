import React, { Component } from 'react';

export default class Match extends Component {
  state = {
    bitten: null
  }

  renderCard(){

    return (
      <div>
        <h1>{this.props.displayName}</h1>
        <img width='250px' src={this.props.profilePicture} alt={`${this.props.displayName} profile`} />
        <p><strong>Classification:</strong> {this.props.classification}</p>
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
