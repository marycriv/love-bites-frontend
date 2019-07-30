import React, { Component } from 'react';



class LoginForm extends Component {

  handleChange = (event) => {
    this.setState({
      userInputId: event.target.value
    })
  }

  // handleLoginSubmit = (event) => {
  //   event.preventDefault();
  //
  //   this.setState({
  //     currentUserId: this.state.userInputId
  //   }, console.log('user id', this.state.currentUserId))



    // let newUserSubmission = {
    //   display_name: this.state.display_name
    // }
    //
    // fetch(API + `/users/${userId}`, {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(newUserSubmission)
    // })
    // .then(resp => resp.json())
    // .then(console.log)


  render(){
    return (
      <div className="LoginForm">
        <form onSubmit={(event) => this.props.handleLoginSubmit(event, this.state.userInputId)}>
          <label>
            Login with ID:
            <input type="text" name="display_name" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    )
  }
}

export default LoginForm;
