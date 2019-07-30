import React from "react";
import Match from "../components/Match";

const PendingContainer = (props) => {

  const handleClickPatch = props.handleClickPatch

  const biterMatches = props.bitesData.filter(bite => {return props.currentUserId === bite.biter_id && bite.status === 'pending'});

  const biteeMatches = props.bitesData.filter(bite => {
    return props.currentUserId === bite.bitee_id && bite.status === 'pending'
  })

  function renderMatches(){
    return biterMatches.map((bite) => {
        return (
          <div className="MatchCard">
          < Match
              key={`pending-${bite.bitee_id}`}
              biteeId={bite.bitee_id}
              displayName={bite.bitee.display_name}
              profilePicture={bite.bitee.profile_picture}
              classification={bite.bitee.classification}
              handleClick={ props.handleClick }
              currentUserId={ props.currentUserId }
            />
          </div>
        )
    })
  }

  function renderMatchesTwo(){
    return biteeMatches.map((bite) => {
         return (
          <div className="MatchCard">
            < Match
              key={`pending-${bite.biter_id}`}
              biteeId={bite.biter_id}
              displayName={bite.biter.display_name}
              profilePicture={bite.biter.profile_picture}
              classification={bite.biter.classification}
              handleClick={ props.handleClick }
              currentUserId={ props.currentUserId }
            />
            <span>
              <img height='50px' alt='heart' src="https://www.seekpng.com/png/full/55-554462_vamire-fangs-png-vampire-fangs-transparent.png" onClick={() => handleClickPatch(bite.id, bite.biter_id, bite.bitee_id, "bitten")} />
            </span>
          </div>
        )
    })
  }


  return (
    <div className="PendingContainer">
      {renderMatches()}
      {renderMatchesTwo()}
    </div>
  )


}

export default PendingContainer;
