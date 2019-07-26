import React from "react";
import Match from "../components/Match";

const boxStyle = {
  border: '5px solid green'
  };

const BittenContainer = (props) => {

  return (
    // this.props.bitesData.map((bite) => (bite.biter_id === user.id || bite.bitee_id === user.id ){

      <div style={boxStyle}>
      { props.userData.map((user) =>
        < Match
          key={user.id}
          biteeId={user.id}
          displayName={user.display_name}
          profilePicture={user.profile_picture}
          classification={user.classification}
        />) }
      </div>

    // }
  )


}

export default BittenContainer;
