import React, { Component } from 'react';

export default class EditUserForm extends Component {

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
    <div className="EditUserForm" onSubmit={(e) => this.props.handleEditSubmit(e, this.state.display_name, this.state.profile_picture, this.state.classification)} >
      <form>
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
