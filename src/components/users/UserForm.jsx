import React, { Component } from "react";

class UserForm extends Component {
  state = {
    text: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input
          type="text"
          name="text"
          className="search-textbox"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default UserForm;
