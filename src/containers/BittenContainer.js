import React from "react";
import Match from "../components/Match";

const BittenContainer = (props) => {

  const biterMatches = props.bitesData.filter(bite => props.currentUserId === bite.biter_id && bite.status === 'bitten');

  const biteeMatches = props.bitesData.filter(bite => props.currentUserId === bite.bitee_id && bite.status === 'bitten')

  // let updatedBite = props.updatedBite

  function renderAllBitten(){
    // updateTheBite(updatedBite)
    return (
      <div className="BittenContainer">
        {biterMatches.map(function(bite) { return (<div className="MatchCard">
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

  // function updateTheBite(updatedBite){
  //   if (updatedBite) {
  //
  //     return(
  //     <div className="MatchCard">
  //         < Match
  //             key={`bitten-${updatedBite.biter_id}`}
  //             biteeId={updatedBite.biter_id}
  //             displayName={'bepis'}
  //             profilePicture={'bepis'}
  //             classification={'bepis'}
  //             handleClick={ props.handleClick }
  //             currentUserId={ props.currentUserId }
  //           />
  //       </div>)
  //   } else { console.log('bepis') }
  // }

  return (
    renderAllBitten()
  )



}

export default BittenContainer;
