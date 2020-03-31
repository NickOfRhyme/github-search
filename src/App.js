import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";

class App extends Component {
  state = {
    isLoading: true,
    users: []
  };

  async componentDidMount() {
    const response = await axios.get("https://api.github.com/users");
    this.setState({ users: response.data, isLoading: false });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
