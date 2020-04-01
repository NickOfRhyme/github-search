import React, { Component } from "react";
import PropTypes from "prop-types";

class UserForm extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    displayAlert: PropTypes.func.isRequired,
    usersShowing: PropTypes.bool.isRequired
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { searchUsers, displayAlert } = this.props;
    if (text) {
      this.props.searchUsers(text);
      this.setState({ text: "" });
    } else {
      displayAlert("Please enter a search term", "warning");
    }
  };

  render() {
    const { usersShowing, clearUsers } = this.props;
    const { text } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="text"
          className="search-textbox"
          value={text}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Search
        </button>
        {usersShowing && (
          <button className="btn btn-light" type="button" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    );
  }
}

export default UserForm;
