import React, { Component } from 'react';
import './App.css';
import PotentialMatchesContainer from './containers/PotentialMatchesContainer'
import BittenContainer from './containers/BittenContainer'
import GarlicContainer from './containers/GarlicContainer'

const API = 'http://localhost:3001'

class App extends Component {

    state = {
      userData: [],
      bitesData: [],
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

// Hardcoded in Spike/u2 liking all users, but it is posting & persisting
  handleClickInitialBite(biteeId) {
    let payload = {
      biter_id: 2,
      bitee_id: biteeId,
      status: "pending"
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

  // handleClickGarlic(biteId){
  //   fetch(API + `/bite/${biteId}`, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'patch',
  //     body: JSON.stringify({
  //       status: 3
  //     })
  //   })
  //   .then(resp  => resp.json())
  //   .then(console.log)
  // }

  componentDidMount(){

    this.getUsers()
    this.setState({
      isLoading: false
    })
  }


  render(){
    const { userData, bitesData, handleClickInitialBite, handleClickGarlic } = this.state

    if (this.state.isLoading) {
      return <div><h1>Loading...</h1></div>
    } else {
      return (
        <div className="App">
          < PotentialMatchesContainer
            userData={ userData }
            handleClickInitialBite={ this.handleClickInitialBite }
            handleClickGarlic={ handleClickGarlic }
            bitesData={ bitesData }
          />
          < BittenContainer
            userData={ userData }
            bitesData={ bitesData }
          />
          < GarlicContainer
            userData={ userData }
            bitesData={ bitesData }
          />
        </div>
      );
    }
  }
}

export default App;
