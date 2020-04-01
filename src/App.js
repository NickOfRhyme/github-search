import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";

class App extends Component {
  state = {
    isLoading: true,
    users: []
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data, isLoading: false });
  }

  render() {
    const { users, isLoading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <UserForm />
        <UserList users={users} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
