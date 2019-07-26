import React, { Component } from "react";
import Match from "../components/Match";

const testStyle = {
  border: '5px solid blue'
  };

export default class PotentialMatchesContainer extends Component {

  renderUsers(){
    // if this.state.bitten null
    return (
      <div style={testStyle}>
        {this.props.userData.map((user) =>
              < Match
                key={user.id}
                displayName={user.display_name}
                profilePicture={user.profile_picture}
                classification={user.classification}
                handleClickInitialBite={this.props.handleClickInitialBite}
                handleClickGarlic={this.props.handleClickGarlic}

              />
        )}
      </div>
    )
  }

  render(){
    return this.renderUsers()
  }

}
