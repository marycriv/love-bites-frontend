import React from 'react';
import LoginForm from "./LoginForm";
import EditUserForm from "./EditUserForm";

const Header = (props) => {
  console.log("CURRENT USER ID", props.currentUserId);
  return (
    <div className="Header">
      <h1>Love Bites</h1>
      {props.userData.map(function(user) {
        return (user.id === props.currentUserId)
          ? <div>
              <div key={user.id}>
                  <h2>{user.display_name}'s profile</h2>
                  <h3>id: {user.id}</h3>
                  <img id="user-icon" src={user.profile_picture} alt='current user icon' />
              </div>
              <button onClick={props.deleteButtonAction}>DELETE USER</button>
            </div>
          : null
        })}
        <LoginForm
          handleLoginSubmit={props.handleLoginSubmit}
         />
         <EditUserForm
           handleEditSubmit={ props.handleEditSubmit }
           />
    </div>
    )
}

export default Header;
