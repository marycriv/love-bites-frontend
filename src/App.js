import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import NavBar from "./components/NavBar";
import NewUserForm from "./components/NewUserForm";
import Header from "./components/Header";
import BepisMode from "./components/BepisMode";

const API = 'http://localhost:3001'

class App extends Component {

  state = {
    isLoading: true,
    userData: [],
    bepisMode: false,
    currentUserId: null
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


  bepisMode = () => {
    this.setState({
      bepisMode: !this.state.bepisMode
    }, () => console.log("Bepis Mode:", this.state.bepisMode))

  }

  handleLoginSubmit = (event, loginId) => {
    event.preventDefault();
    if (loginId === 'bepis') {
      this.bepisMode()
    } else {
      let id = parseInt(loginId)

      this.setState({
        currentUserId: id
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
      currentUserId: newData.id
    }))
    .catch(error => console.log('error'))
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

    // console.log("AHHHHH", userData)
    let currentUserId = this.state.currentUserId

    if (this.state.isLoading) {
      return <div><h1>Loading...</h1></div>
    } else if (this.state.bepisMode) {
      return (
      <BepisMode /> )
    } else {
      return (
        <div className="App">
        <Header
          userData={userData}
          currentUserId={ currentUserId }
          handleLoginSubmit={this.handleLoginSubmit}
          deleteButtonAction={this.deleteButtonAction}
          handleEditSubmit={this.handleEditSubmit}
        />
        <NavBar />
        <NewUserForm
          userData={ userData }
          handleSubmit={this.handleSubmit}
        />
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
