import React, { Component } from 'react';
import './../App.css';
import PotentialMatchesContainer from './PotentialMatchesContainer'
import BittenContainer from './BittenContainer'
import PendingContainer from './PendingContainer'
import GarlicContainer from './GarlicContainer'


const API = 'http://localhost:3001'

class MainContainer extends Component {

  state = {
    bitesData: [],
    display_name: null,
    profile_picture: null,
    classification: null,
    bitten: null,
    updatedBite: null,
  }

    getBites = () => {
        fetch(API + '/bites')
        .then(resp  => resp.json())
        .then((bitesData) => {
          this.setState({
            bitesData: bitesData
          })
        })
    }

    handleClick = (biterId, biteeId, status) => {
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
      .then(resp => resp.json())
      .then((newBite) => {
        this.setState({
          bitesData: [...this.state.bitesData, newBite]
        })
      })
    }


    handleClickPatch = (biteId, biterId, biteeId, status) => {
      let payload = {
        biter_id: biterId,
        bitee_id: biteeId,
        status: status
      }

      fetch(API + `/bites/${biteId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(payload)
      })
      .then(resp  => resp.json())
      .then((editedBite) => {this.getBites()})
      // .then((editedBite) => {this.setState({updatedBite: editedBite}, () => console.log(this.state.updatedBite))})
    }

    componentDidMount(){
      this.getBites()
    }

  render(){
    // console.log('Props from MainContainer:', this.props)
    // console.log('State from MainContainer', this.state)

    let {  bitesData } = this.state
      return (
        <div>
        
            < PotentialMatchesContainer
              userData={ this.props.userData }
              handleClick={ this.handleClick }
              handleClickPatch={ this.handleClickPatch }
              bitesData={ bitesData }
              currentUserId={ this.props.currentUserId }

              bitten={ this.state.bitten }

              vampireMode={this.vampireMode}
              dhampirMode={this.dhampirMode}
              slayerMode={this.slayerMode}
              humanMode={this.humanMode}
            />
            <a name="pending"></a>
             < PendingContainer
              userData={ this.props.userData }
              bitesData={ bitesData }

              handleClickPatch={ this.handleClickPatch }

              currentUserId={ this.props.currentUserId }
            />
            <a name="bitten"></a>
            < BittenContainer
              userData={ this.props.userData }
              bitesData={ bitesData }
              currentUserId={ this.props.currentUserId }
              updatedBite={this.state.updatedBite}
            />
            <a name="garlic"></a>
            < GarlicContainer
              userData={ this.props.userData }
              bitesData={ bitesData }
              currentUserId={ this.props.currentUserId }
            />
        </div>
      );
  } // end render

}

export default MainContainer;
