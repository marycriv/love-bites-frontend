import React from 'react';

const Header = (props) => {

  return (
    <div className="Header">
      <h1>Love Bites</h1>

      {props.userData.map(function(user) {
        return (user.id === props.currentUserId)
          ? <div key={user.id}>
              <h2>{user.display_name}'s profile</h2>
              <h3>id: {user.id}</h3>
              <img src={user.profile_picture} width='100px' alt='current user icon' />
          </div>
          : null
        })}
    </div>
    )
}

export default Header;
