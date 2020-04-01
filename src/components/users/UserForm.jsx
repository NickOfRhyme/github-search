import React, { Component } from "react";
import PropTypes from "prop-types";

class UserForm extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
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
