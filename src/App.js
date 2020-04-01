import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";

class App extends Component {
  state = {
    isLoading: false,
    users: []
  };

  searchUsers = async text => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET})`
    );
    this.setState({ users: response.data.items, isLoading: false });
  };

  clearUsers = () => this.setState({ users: [], isLoading: false });

  render() {
    const { users, isLoading } = this.state;
    const { searchUsers, clearUsers } = this;
    return (
      <div className="App">
        <Navbar />
        <UserForm
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          usersShowing={users.length > 0}
        />
        <UserList users={users} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
