import React from "react";
import Match from "../components/Match";

const GarlicContainer = props => {

  const biterMatches = props.bitesData.filter(bite => props.currentUserId === bite.biter_id && bite.bitee && bite.status === 'garlic');

  const biteeMatches = props.bitesData.filter(bite => props.currentUserId === bite.bitee_id && bite.biter && bite.status === 'garlic')

  function renderAllGarlicked(){
    return (
      <div className="GarlicContainer">
        {biterMatches.map(function(bite) { return (<div className="MatchCard">
          < Match
              key={`garlic-${bite.bitee_id}`}
              biteeId={bite.bitee_id}
              displayName={bite.bitee.display_name}
              profilePicture={bite.bitee.profile_picture}
              classification={bite.bitee.classification}
              handleClick={ props.handleClick }
              currentUserId={ props.currentUserId }
            />
          </div>)
        })}
        {biteeMatches.map(function(bite) { return (<div className="MatchCard">
            < Match
                key={`bitten-${bite.biter_id}`}
                biteeId={bite.biter_id}
                displayName={bite.biter.display_name}
                profilePicture={bite.biter.profile_picture}
                classification={bite.biter.classification}
                handleClick={ props.handleClick }
                currentUserId={ props.currentUserId }
              />
            </div>)
        })}
      </div>
    )
  }

  return renderAllGarlicked()

}

export default GarlicContainer;
