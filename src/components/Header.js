import React from 'react';
import LoginForm from "./LoginForm";
import EditUserForm from "./EditUserForm";

export default class Header extends React.Component {

  render() {

    return (
      <div>
        {!this.props.loggedIn
          ? <div className="Header">
              <h1>Love Bites</h1>
                <LoginForm
                  handleLoginSubmit={this.props.handleLoginSubmit}
                 />
            </div>
          : <div className="Header">
              <h1>Love Bites</h1>
                  <div>
                      <div key={this.props.currentUser.id}>
                          <h2>{this.props.currentUser.display_name}'s profile</h2>
                          <h3>id: {this.props.currentUser.id}</h3>
                          <img id="user-icon" src={this.props.currentUser.profile_picture} alt='current user icon' />
                      </div>
                      <button onClick={this.props.deleteButtonAction}>DELETE USER</button>
                      <h2>Edit info:</h2>
                    </div>
                 <EditUserForm
                   handleEditSubmit={ this.props.handleEditSubmit }
                   />
              </div>
            }
      </div>
    )
  }
}
