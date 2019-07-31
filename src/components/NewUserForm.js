import React, { Component } from 'react';

export default class NewUserForm extends Component {

  state = {
    display_name: '',
    profile_picture: '',
    classification: ''
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }



render(){
  return (

    <div className="NewUserForm" >
    <h3> Signup form:
    </h3>
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.display_name, this.state.profile_picture, this.state.classification)} >
        <label>
          Name:
          <input type="text" name="display_name" onChange={this.handleChange} />
        </label>
        <label>
          Profile Pic:
          <input type="text" name="profile_picture" onChange={this.handleChange} />
        </label>
        <label>
          Classification:
          <input type="text" name="classification" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}
