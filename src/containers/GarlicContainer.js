import React from "react";
import Match from "../components/Match";

const boxStyle = {
  border: '5px solid red'
  };

const GarlicContainer = props => {


  return (
    // if !this.state.bitten
    <div style={boxStyle}>
      { props.userData.map((user) =>
        < Match
          key={user.id}
          displayName={user.display_name}
          profilePicture={user.profile_picture}
          classification={user.classification}
        />) }
    </div>
  )


}

export default GarlicContainer;
