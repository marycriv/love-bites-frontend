import React, { Component } from "react";
import Match from "../components/Match";

export default class PotentialMatchesContainer extends Component {

  //finish this
  // const vampireCards = this.props.userData.filter(user => {return user.classification === 'vampire'});

  renderUsers(){
    // console.log("State from PotentialMatchesContainer", this.props.state)

    let currentUserId = this.props.currentUserId

    let handleClick = this.props.handleClick
    let userData = this.props.userData
    let bitesData = this.props.bitesData

    let usersIBit = bitesData.filter(bite =>  (bite.biter_id === currentUserId));

    let usersWhoBitMe = bitesData.filter(bite => (bite.bitee_id === currentUserId));

    let usersIBit2 = usersIBit.map(bite =>  bite.bitee_id);

    let usersWhoBitMe2 = usersWhoBitMe.map(bite => bite.biter_id);

    let usersSharingBite = [...usersIBit2, ...usersWhoBitMe2]

    return (
      <div className="PotentialContainer">
        {userData.map(user => {

          return user.id !== currentUserId && !usersSharingBite.includes(user.id)
            ? (<div className="MatchCard">
                < Match
                  key={`potential-${user.id}`}
                  biteeId={user.id}
                  displayName={user.display_name}
                  profilePicture={user.profile_picture}
                  classification={user.classification}
                  currentUserId={ currentUserId }
                />
                <span>
                  <img height='50px' alt='heart' src="https://emojis.wiki/emoji-pics/facebook/heart-with-arrow-facebook.png" onClick={() => handleClick(currentUserId, user.id, "pending")} />
                  <img height='50px' alt='garlic' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/181/garlic_1f9c4.png" onClick={() => handleClick(currentUserId, user.id, "garlic")} />
                </span>
              </div>)
            : null
        })}
      </div>
    )
  }

  render(){
    return this.renderUsers()
  }
}
