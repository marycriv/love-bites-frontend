import React, { Component } from 'react';
import './App.css';
import PotentialMatchesContainer from './containers/PotentialMatchesContainer'
import BittenContainer from './containers/BittenContainer'
import PendingContainer from './containers/PendingContainer'
import GarlicContainer from './containers/GarlicContainer'
import NavBar from "./components/NavBar";
import Header from "./components/Header";


const API = 'http://localhost:3001'

class App extends Component {

    state = {
      userData: [],
      bitesData: [],
      currentUserId: 4,
      isLoading: true
    }

  getUsers() {
      fetch(API + '/users')
      .then(resp  => resp.json())
      .then((userData) => {
        this.setState({
          userData: userData
        })
      })
  }

  getBites() {
      fetch(API + '/bites')
      .then(resp  => resp.json())
      .then((bitesData) => {
        this.setState({
          bitesData: bitesData
        })
      })
  }

  handleClick(biterId, biteeId, status) {
    let payload = {
      biter_id: biterId,
      bitee_id: biteeId,
      status: status
    }

    fetch(API + `/bites`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(resp  => resp.json())
    .then(console.log)
  }

  componentDidMount(){

    this.getUsers()
    this.getBites()
    this.setState({
      isLoading: false
    })
  }


  render(){
    const { userData, bitesData, handleClick, currentUserId } = this.state

    if (this.state.isLoading) {
      return <div><h1>Loading...</h1></div>
    } else {
      return (
        <div className="App">
          <Header
            userData={ userData }
            currentUserId={ currentUserId }
          />
          <NavBar />
            < PotentialMatchesContainer
              userData={ userData }
              handleClick={ this.handleClick }
              bitesData={ bitesData }
              currentUserId={ currentUserId }
            />
            < PendingContainer
              userData={ userData }
              bitesData={ bitesData }
              currentUserId={ currentUserId }
              handleClick={ this.handleClick }
            />
            < BittenContainer
              userData={ userData }
              bitesData={ bitesData }
              currentUserId={ currentUserId }
              handleClick={ this.handleClick }
            />
            < GarlicContainer
              userData={ userData }
              bitesData={ bitesData }
              currentUserId={ currentUserId }
              handleClick={ this.handleClick }
            />
        </div>
      );
    }
  }
}

export default App;
