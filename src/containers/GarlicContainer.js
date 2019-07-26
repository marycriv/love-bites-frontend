import React from "react";
import Match from "../components/Match";

const GarlicContainer = props => {

  // grabBites = () => {
  //   props.bitesData.map(function(bite) { ((props.currentUserId === bite.biter_id || bite.bitee_id) && bite.status === 'garlic') ?
  //     const matchId = bite.biterId
  //   : null
  // }

  return (
    <div className="GarlicContainer">
      {props.bitesData.map(function(bite) { return ((props.currentUserId === bite.biter_id || bite.bitee_id) && bite.status === 'garlic') ?
      <div className="MatchCard">
          < Match
              key={bite.bitee_id}
              biteeId={bite.bitee_id}
              displayName={bite.bitee.display_name}
              profilePicture={bite.bitee.profile_picture}
              classification={bite.bitee.classification}
              handleClick={ props.handleClick }
              currentUserId={ props.currentUserId }
            />
          </div>
          : null
      })}
    </div>

  )

}

export default GarlicContainer;
