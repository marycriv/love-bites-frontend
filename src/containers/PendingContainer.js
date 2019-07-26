import React from "react";
import Match from "../components/Match";

const PendingContainer = (props) => {

  //not working

  const biterMatches = props.bitesData.filter(bite => props.currentUserId === bite.biter_id && bite.status === 'pending');

  console.log("BITER:", biterMatches)

  const biteeMatches = props.bitesData.filter(bite => {
    return props.currentUserId === bite.bitee_id && bite.status === 'pending'
  })

  console.log("BIN BIT:", biteeMatches)

  function renderMatches(){
    return biterMatches.map((bite) => {
        return (<div className="MatchCard">
          < Match
              key={`bitten-${bite.bitee_id}`}
              biteeId={bite.bitee_id}
              displayName={bite.bitee.display_name}
              profilePicture={bite.bitee.profile_picture}
              classification={bite.bitee.classification}
              handleClick={ props.handleClick }
              currentUserId={ props.currentUserId }
            />
          </div>)
    })
  }

  function renderMatchesTwo(){
    return biteeMatches.map((bite) => {
         return (
          <div className="MatchCard">
            < Match
              key={`bitten-${bite.biter_id}`}
              biteeId={bite.biter_id}
              displayName={bite.biter.display_name}
              profilePicture={bite.biter.profile_picture}
              classification={bite.biter.classification}
              handleClick={ props.handleClick }
              currentUserId={ props.currentUserId }
            />
            <span>
              <img height='50px' alt='heart' src="https://www.seekpng.com/png/full/55-554462_vamire-fangs-png-vampire-fangs-transparent.png" onClick={() => this.props.handleClick(props.currentUserId, bite.bitee_id, "bitten")} />
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
