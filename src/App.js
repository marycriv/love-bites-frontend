import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import NewUserForm from "./components/NewUserForm";
import Header from "./components/Header";
import BepisMode from "./components/BepisMode";

const API = 'https://calm-depths-38251.herokuapp.com'

const classificationArray = []


class App extends Component {

  state = {
    isLoading: true,
    userData: [],
    bepisMode: false,
    currentUserId: null,
    currentUser: null,
    loggedIn: false,
    vampireMode: true,
    dhampirMode: true,
    slayerMode: true,
    humanMode: true,
    classification: ''
  }

  getUsers() {
      fetch(API + '/users')
      .then(resp  => resp.json())
      .then(userData => {
        this.setState({
          userData: userData,
          isLoading: false
        })
      })
  }

  componentDidMount(){
    // console.log('state', this.state)

    this.getUsers()
  }

  vampireModeToggle = () => {


    this.setState({
      vampireMode: !this.state.vampireMode
    })

    if (this.state.vampireMode) {
      this.setState({
        userData: this.state.userData.filter(user => user.classification === 'vampire')
      })
    } else {
      this.getUsers()
    }

  } // end vmt

  dhampirModeToggle = () => {
    this.setState({
      dhampirMode: !this.state.dhampirMode
    })

    if (this.state.dhampirMode) {
      this.setState({
        userData: this.state.userData.filter(user => user.classification === 'dhampir')
      })
    } else {
      this.getUsers()
    }
  }

  humanModeToggle = () => {
    this.setState({
      humanMode: !this.state.humanMode
    })

    if (this.state.humanMode) {
      this.setState({
        userData: this.state.userData.filter(user => user.classification === 'human')
      })
    } else {
      this.getUsers()
    }
  }

  slayerModeToggle = () => {
    this.setState({
      slayerMode: !this.state.slayerMode
    })

    if (this.state.slayerMode) {
      this.setState({
        userData: this.state.userData.filter(user => user.classification === 'slayer')
      })
    } else {
      this.getUsers()
    }

  }


  bepisMode = () => {
    this.setState({
      bepisMode: !this.state.bepisMode
    }, () => console.log("Bepis Mode:", this.state.bepisMode))

  }

  handleLoginSubmit = (event, userInput) => {
    event.preventDefault();
    if (userInput === 'bepis') {
      this.bepisMode()
    } else {
      let username = userInput

      let user = this.state.userData.find(function(user){ return user.display_name.includes(username)})

      this.setState({
        currentUserId: user.id,
        currentUser: user,
        loggedIn: true
      })
    }
  }

  handleSubmit = (e, name, picture, classification) => {
    e.preventDefault();

    let newUserSubmission = {
      display_name: name,
      profile_picture: picture,
      classification: classification
    }

    fetch(API + `/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newUserSubmission)
    })
    .then(resp => resp.json())
    .then((newData) => this.setState({
      userData: [...this.state.userData, newData],
      currentUserId: newData.id,
      currentUser: newData,
      loggedIn: true
    }))

  }

  deleteButtonAction = () => {
    fetch(API + `/users/${this.state.currentUserId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then(this.setState({
      currentUserId: null
    }))
  }

  handleEditSubmit = (e, name, picture, classification) => {
    e.preventDefault();

    let editUserSubmission = {
      display_name: name,
      profile_picture: picture,
      classification: classification
    }

    fetch(API + `/users/${this.state.currentUserId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(editUserSubmission)
    })
    .then(resp => resp.json())
    .then((editedUser) => {this.getUsers()})

  }

  render(){

    const { userData } = this.state

    let currentUserId = this.state.currentUserId


    if (this.state.isLoading) {
      return <div><h1>Loading...</h1></div>
    } else if (this.state.bepisMode) {
      return (
      <BepisMode /> )
    } else if (!this.state.loggedIn) {
      return(
        <div className="App">
          <Header
            userData={userData}
            currentUserId={ currentUserId }
            handleLoginSubmit={this.handleLoginSubmit}
            deleteButtonAction={this.deleteButtonAction}
            handleEditSubmit={this.handleEditSubmit}
            loggedIn={this.state.loggedIn}
            currentUser={this.state.currentUser}
          />
          <NewUserForm
            userData={ userData }
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    } else {
      return (
        <div className="App">
        <Header
          userData={userData}
          currentUserId={ currentUserId }
          handleLoginSubmit={this.handleLoginSubmit}
          deleteButtonAction={this.deleteButtonAction}
          handleEditSubmit={this.handleEditSubmit}
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser}
        />

        <div className="TopBar">
          <div className="InterestedIn">
            <h3>I'm looking for... </h3>
            <ul>
              <li onClick={this.vampireModeToggle}>
                vampires 🧛🏻‍
              </li>
              <li onClick={this.dhampirModeToggle}>
                dhampirs 🦇
              </li>
              <li onClick={this.humanModeToggle}>
                humans 💉
              </li>
              <li onClick={this.slayerModeToggle}>
                slayers ⚔️
              </li>
            </ul>
          </div>

            <div className="JumpBtns">
              <h3>Jump to...</h3>
              <ul>
                <li><a href="#pending">pending</a></li>
                <li><a href="#bitten">bitten</a></li>
                <li><a href="#garlic">garlic</a></li>
                </ul>
            </div>
          </div>

          <MainContainer
            userData={ userData }
            currentUserId={ currentUserId }
          />
        </div>
      );
    }
  } // end render
}

export default App;
