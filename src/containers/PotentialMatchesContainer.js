import React, { Component } from "react";
import Match from "../components/Match";

export default class PotentialMatchesContainer extends Component {

  renderUsers(){
    const { currentUserId, handleClick } = this.props
    // if this.state.bitten null
    return (
      <div className="PotentialContainer">
        {this.props.userData.map(function(user) { return (user.id !== currentUserId) ?
          <div className="MatchCard">
            < Match
                key={user.id}
                biteeId={user.id}
                displayName={user.display_name}
                profilePicture={user.profile_picture}
                classification={user.classification}
                handleClick={ handleClick }
                currentUserId={ currentUserId }
              />
              <span>
                <img height='50px' alt='heart' src="https://emojis.wiki/emoji-pics/facebook/heart-with-arrow-facebook.png" onClick={() => this.props.handleClick(currentUserId, user.id, "pending")} />
                <img height='50px' alt='garlic' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/181/garlic_1f9c4.png" onClick={() => this.props.handleClick(currentUserId, user.id, "garlic")} />
              </span>
            </div>
             : null
        })}
      </div>
    )
  }

  render(){
    return this.renderUsers()
  }

}
