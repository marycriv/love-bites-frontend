import React from "react";
import Match from "../components/Match";

const BittenContainer = (props) => {

  return (
    <div className="BittenContainer">
      {props.bitesData.map(function(bite) { return ((props.currentUserId === bite.biter_id || bite.bitee_id) && bite.status === 'bitten') ?
      <div className="MatchCard">
        < Match
            key={`bitten-${bite.bitee_id}`}
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

export default BittenContainer;
